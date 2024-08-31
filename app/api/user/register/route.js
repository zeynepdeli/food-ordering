import dbConnect from '../../../../lib/db';
import { NextResponse } from 'next/server';
import User from "../../../../models/User";
import bcrypt from 'bcryptjs';

export async function POST(request) {
  await dbConnect();

  try {
    const body = await request.json();
    console.log('Request body:', body);

    const { fullName, email, password, confirmPassword } = body;

    // Full name alanı kontrolü
    if (!fullName) {
      return NextResponse.json({ message: 'Full name is required' }, { status: 400 });
    }

    if (!email || !password || !confirmPassword) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ message: 'Passwords do not match' }, { status: 400 });
    }

    // Mevcut kullanıcıyı kontrol et
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log('Creating user with:', { fullName, email, hashedPassword });

    // Yeni kullanıcıyı oluştur
    const newUser = new User({
      fullName: fullName,
      email: email,
      password: hashedPassword,
    });

    // Yeni kullanıcıyı veritabanına kaydet
    await newUser.save();

    // Başarı durumunda yanıt döndür
    return NextResponse.json(newUser, { status: 201 });

  } catch (err) {
    console.error('Error creating user:', err.message);
    return NextResponse.json({ message: 'Internal Server Error', error: err.message }, { status: 500 });
  }
}

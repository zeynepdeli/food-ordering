const dbConnect = require('../../../lib/db');
const { NextResponse } = require('next/server');

export async function GET() {
  try {
    const db = await dbConnect(); // Veritabanına bağlan
    const collection = db.collection('collection_name'); // Koleksiyon adı
    const data = await collection.find({}).toArray(); // Verileri çek

    return NextResponse.json(data);
  } catch (error) {
    console.error('Database Connection Error:', error);
    return NextResponse.json({ message: 'Failed to connect to the database' }, { status: 500 });
  }
}

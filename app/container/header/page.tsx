"use client"
import { useState } from "react";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Logo from "../../components/logo";
import Search from "../../search/Search";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div className="h-[5.5rem] bg-secondary ">
      <div className="container mx-auto text-white items-center h-full flex justify-between">
        <div>
          <Logo />
        </div>

        <nav>
          <ul className="flex uppercase gap-x-4">
            <li className="px-[5px] py-[20px] hover:text-primary cursor-pointer">
              <Link href="/home">Home</Link>
            </li>
            <li className="px-[5px] py-[20px] hover:text-primary cursor-pointer">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="px-[5px] py-[20px] hover:text-primary cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="px-[5px] py-[20px] hover:text-primary cursor-pointer">
              <Link href="/booktable">Book Table</Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-x-4 items-center">
          <Link href="/auth/login">
            <span>
              <FaUserAlt className="hover:text-primary transition-all cursor-pointer" />
            </span>
          </Link>
          <Link href="/cart">
            <span className="relative">
              <FaShoppingCart className="hover:text-primary transition-all cursor-pointer" />
              <span className="w-4 h-4 text-xs grid place-content-center rounded-full bg-primary absolute -top-2 -right-3 text-black font-bold">
                {cart.products.length === 0 ? "0" : cart.products.length}
              </span>
            </span>
          </Link>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all cursor-pointer" />
          </button>
          <a href="">
            <button className="btn-primary">Order Online</button>
          </a>
        </div>
      </div>

      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;

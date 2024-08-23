import Image from "next/image";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { GiCancel } from "react-icons/gi";
import Title from "../components/title";

interface SearchProps {
  setIsSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search: React.FC<SearchProps> = ({ setIsSearchModal }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="relative w-[600px] h-[600px] bg-white p-6 rounded-lg  max-w-[600px]">
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsSearchModal(false)}
          >
            <GiCancel size={25} className="text-black" />
          </button>
          <Title addClass="text-center text-2xl">Search</Title>
          <input
            type="text"
            placeholder="Search..."
            className="w-full border p-2 mt-4"
          />
          <ul className="mt-4">
            <li className="flex items-center justify-between p-2 hover:bg-primary transition-all">
              <div className="relative flex items-center">
                <Image src="/images/f1.png" alt="Good Pizza" width={48} height={48} />
                <span className="ml-4 font-bold">Good Pizza</span>
              </div>
              <span className="font-bold">$10</span>
            </li>
           
          </ul>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;

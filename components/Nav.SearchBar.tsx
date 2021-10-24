import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
export default function SearchBar(): JSX.Element {
  const [input, setInput] = useState<string>("");
  const handlerChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };
  return (
    <div className="flex items-center w-full justify-center">
      <input
        value={input}
        onChange={handlerChangeInput}
        placeholder="Buscar"
        className="w-2/4 bg-black pl-4 text-lg h-10 bg-opacity-90 placeholder-gray-500 text-gray-500 focus:outline-none border border-gray-600"
      />
      <button className="h-10 w-16 bg-gray-700 flex items-center justify-center">
        <BsSearch className="text-2xl" />
      </button>
      <button className="p-3 ml-4 rounded-full bg-black bg-opacity-85">
        <FaMicrophone className="text-white text-xl" />
      </button>
    </div>
  );
}

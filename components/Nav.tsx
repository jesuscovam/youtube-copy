import { AiFillYoutube, AiOutlineMenu } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import SearchBar from "./Nav.SearchBar";
import NavIcons from "./Nav.Icons";

export default function Nav(): JSX.Element {
  return (
    <nav className="flex p-4 items-center bg-black bg-opacity-85 w-full justify-between">
      <section className="flex items-center">
        <AiOutlineMenu className="text-2xl text-white" />
        <AiFillYoutube className="text-5xl text-red-500 ml-10" />
      </section>

      <SearchBar />

      <NavIcons />
    </nav>
  );
}

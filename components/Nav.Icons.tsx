import { BiVideoPlus } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
export default function NavIcons(): JSX.Element {
  return (
    <section className="flex items-center justify-between space-x-6">
      <BiVideoPlus className="text-3xl text-white" />
      <CgMenuGridR className="text-3xl text-white" />
      <IoMdNotificationsOutline className="text-3xl text-white" />
      <FaUserCircle className="text-3xl text-white" />
    </section>
  );
}

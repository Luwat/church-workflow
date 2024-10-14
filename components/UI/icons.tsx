import { BiUserPin } from "react-icons/bi";
import { TbUsersGroup } from "react-icons/tb";
import { RiContactsBook2Line } from "react-icons/ri";
import { BsBrightnessAltHigh } from "react-icons/bs";
import { PiCrossThin } from "react-icons/pi";
import Link from "next/link";
import { primary } from "@/constants/colors";

const IconComponent = () => {
  return (
    <section className="flex justify-around items-center w-full mb-10 border-[1px] shadow-sm sha rounded-md px-4 py-2">
      <Link
        href={""}
        className="flex justify-center items-center w-8 h-8 rounded-full bg-[#E7EFF7]"
      >
        <BiUserPin size={20} color={primary} />
      </Link>
      <div className="border-r-2 h-6" />
      <Link
        href={""}
        className="flex justify-center items-center w-8 h-8 rounded-full bg-[#E7EFF7]"
      >
        <RiContactsBook2Line size={20} color={primary} />
      </Link>
      <div className="border-r-2 h-6" />
      <Link
        href={""}
        className="flex justify-center items-center w-8 h-8 rounded-full bg-[#E7EFF7]"
      >
        <TbUsersGroup size={20} color={primary} />
      </Link>
      <div className="border-r-2 h-6" />
      <Link href={""} className="flex justify-center pr-3 gap-3">
        <div
          className={`flex justify-center items-center w-8 h-8 rounded-full bg-[#0c5fb3]`}
        >
          <BsBrightnessAltHigh size={20} color={"white"} />
        </div>
        <div className="font-semibold">
          <p>Step 4/5</p>
          <p className="text-[0.95rem] text-[#0c5fb3] mt-1">Emergency Info</p>
        </div>
      </Link>
      <div className="border-r-2 h-6" />
      <Link href={""} className={`flex justify-center items-center w-8 h-8`}>
        <PiCrossThin size={20} color={primary} />
      </Link>
    </section>
  );
};

export default IconComponent;

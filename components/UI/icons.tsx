import { BiUserPin } from "react-icons/bi";
import { TbUsersGroup } from "react-icons/tb";
import { RiContactsBook2Line } from "react-icons/ri";
import { BsBrightnessAltHigh } from "react-icons/bs";
import { PiCrossThin } from "react-icons/pi";
import Link from "next/link";
import { primary } from "@/constants/colors";

const IconComponent = () => {
  return (
    <section className="flex justify-center w-full gap-10 mb-10 border-2 rounded-md px-4 py-3">
      <Link href={""} className="">
        <BiUserPin size={28} color={primary} />
      </Link>
      <Link href={""}>
        <TbUsersGroup size={28} color={primary} />
      </Link>
      <Link href={""}>
        <RiContactsBook2Line size={28} color={primary} />
      </Link>
      <Link href={""}>
        <BsBrightnessAltHigh size={28} color={primary} />
      </Link>
      <Link href={""}>
        <PiCrossThin size={28} color={primary} />
      </Link>
    </section>
  );
};

export default IconComponent;

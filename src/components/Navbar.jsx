import Link from "next/link";
import React from "react";
import { IoMdAdd } from "react-icons/io";

function Navbar() {
  return (
    <div className=" md:px-32 md:pt-10 bg-slate-200">
      <nav className=" w-full flex items-center py-5 justify-between bg-slate-800 px-5 ">
        <Link href={"/"}>
          <h1 className=" md:text-xl font-bold text-white">SOLOdev</h1>
        </Link>

        <h1 className=" text-white text-sm md:text-xl font-bold uppercase">
          Task Management tool
        </h1>

        <Link href={"/addTask"}>
          <h1 className=" px-1 py-1 bg-white w-fit md:px-5 md:py-2">
            <IoMdAdd className=" text-xl font-bold" />
          </h1>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;

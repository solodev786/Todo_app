import Link from "next/link";
import React from "react";
import { IoMdAdd } from "react-icons/io";

function Navbar() {
  return (
    <div className=" md:px-32 md:pt-10 bg-slate-800">
      <nav className=" w-full flex items-center py-5 justify-between bg-slate-800 px-5 ">
        <Link href={"/"}>
          <h1 className=" md:text-xl font-bold text-slate-600">SOLOdev</h1>
        </Link>

        <h1 className=" hidden md:block text-slate-600 text-sm md:text-xl font-bold uppercase">
          ToDo
        </h1>

        <Link href={"/addTask"}>
          <h1 className=" px-1 py-1 bg-slate-600 w-fit md:px-5 md:py-2 rounded-full">
            <IoMdAdd className=" text-xl font-bold text-white" />
          </h1>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;

"use client";

import Image from "next/image";
import { IoTrashBin } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/constants";

export default function Home() {
  const router = useRouter();
  const [topics, setTopics] = useState([]);

  const getTopics = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/topic`
      );
      if (response.status === 200) {
        setTopics(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/topic/${id}`
      );
      if (response.status === 200) {
        console.log(response.data);
        getTopics();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <div className=" w-full flex flex-col gap-5 min-h-screen">
      {topics.map((items, index) => {
        return (
          <div
            key={index}
            className=" flex items-start justify-between px-5 py-5 w-full border-b border-slate-600"
          >
            <div className=" flex flex-col gap-1">
              <h1 className="text-2xl font-semibold text-sky-600 uppercase">
                {items.topic}
              </h1>
              <h1 className=" md:w-2/3 text-gray-400">{items.description}</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <IoTrashBin
                onClick={() => {
                  alert("Are you sure");
                  deleteTask(items._id);
                }}
                className=" text-red-500 text-3xl"
              />
              <Link href={`/editTopic/${items._id}`}>
                <FaEdit className=" text-3xl text-gray-400" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

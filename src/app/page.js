"use client";

import Image from "next/image";
import { IoTrashBin } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [topics, setTopics] = useState([]);

  const getTopics = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/topic");
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
        `http://localhost:3001/api/topic/${id}`
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
    <div className=" w-full flex flex-col gap-5">
      {topics.map((items, index) => {
        return (
          <div
            key={index}
            className=" flex items-start justify-between px-5 py-5 w-full border border-slate-600"
          >
            <div className=" flex flex-col gap-1">
              <h1 className="text-2xl font-semibold text-blue-900 uppercase">
                {items.topic}
              </h1>
              <h1 className=" md:w-2/3">{items.description}</h1>
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
                <FaEdit className=" text-3xl" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

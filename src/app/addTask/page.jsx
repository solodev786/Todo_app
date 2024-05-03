"use client";
import axios from "axios";
import { useRef, useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/constants";

function Page() {
  const router = useRouter();
  const inputRef = useRef(null);

  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  const addNewTopic = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/topic`,
        {
          topic,
          description,
        }
      );
      if (response.status === 201) {
        console.log(response.data);
        router.push("/");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 500) {
        alert("You can't add this item. because its already save");
      }
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className=" min-h-screen">
      <form onSubmit={addNewTopic} className=" flex flex-col gap-3">
        <input
          onChange={(e) => setTopic(e.target.value)}
          ref={inputRef}
          type="text"
          placeholder="Add new topic"
          className=" px-5 w-1/2 h-12 bg-slate-700 text-white"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Topic description"
          className=" px-5 w-2/3 h-12 bg-slate-700 text-white"
        />
        <button type="submit" className=" w-32 bg-slate-700 text-white py-3">
          Add task
        </button>
      </form>
    </div>
  );
}

export default Page;

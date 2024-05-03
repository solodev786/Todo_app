"use client";
import axios from "axios";
import { useRef, useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/constants";
function Page({ params }) {
  const router = useRouter();

  const [topic, setPrevTopic] = useState("");
  const [description, setDesc] = useState("");

  const inputRef = useRef();

  const getTopicById = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/topic/${params.id}`);
      if (response.status === 200) {
        setPrevTopic(response.data.topic);
        setDesc(response.data.description);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/topic/${params.id}`,
        {
          topic,
          description,
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopicById();
    inputRef.current.focus();
  }, [getTopicById]);
  return (
    <div className=" min-h-screen">
      <form onSubmit={updateTask} className=" flex flex-col gap-3">
        <input
          ref={inputRef}
          onChange={(e) => setPrevTopic(e.target.value)}
          value={topic}
          type="text"
          placeholder="edit topic"
          className=" px-5 w-1/2 h-12  bg-slate-700 text-white"
        />
        <input
          onChange={(e) => setDesc(e.target.value)}
          value={description}
          type="text"
          placeholder="Edit topic description"
          className=" px-5 w-2/3 h-12 bg-slate-700 text-white"
        />
        <button type="submit" className=" w-32  py-3 bg-slate-700 text-white">
          Edit task
        </button>
      </form>
    </div>
  );
}

export default Page;

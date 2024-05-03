"use client";
import axios from "axios";
import { useRef, useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const inputRef = useRef(null);

  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  const addNewTopic = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/topic", {
        topic,
        description,
      });
      if (response.status === 201) {
        console.log(response.data);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <form onSubmit={addNewTopic} className=" flex flex-col gap-3">
        <input
          onChange={(e) => setTopic(e.target.value)}
          ref={inputRef}
          type="text"
          placeholder="Add new topic"
          className=" px-5 w-1/2 h-12 border border-slate-500"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Topic description"
          className=" px-5 w-2/3 h-12 border border-slate-500"
        />
        <button type="submit" className=" w-32 bg-slate-800 text-white py-3">
          Add task
        </button>
      </form>
    </div>
  );
}

export default page;

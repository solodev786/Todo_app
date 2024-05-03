import { connectToMongoDB } from "@/libs/mongodb";
import Topic from "@/models/topicModel";

import { NextResponse } from "next/server";

export const GET = async () => {
  await connectToMongoDB();
  const response = await Topic.find();
  if (!response) {
    console.log("there is no topic");
    return NextResponse.json("there is no response added");
  }
  return NextResponse.json(response, { status: 200 });
};

export const POST = async (request) => {
  const { topic, description } = await request.json();
  await connectToMongoDB();
  try {
    const response = await Topic.create({ topic, description });
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    return NextResponse.json(error);
  }
};

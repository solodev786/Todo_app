import { connectToMongoDB } from "@/libs/mongodb";
import Topic from "@/models/topicModel";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  const { id } = params;
  const { topic, description } = await request.json();
  await connectToMongoDB();

  try {
    const response = await Topic.findByIdAndUpdate(
      id,
      {
        topic,
        description,
      },
      { new: true }
    );
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
};

export const DELETE = async (_request, { params }) => {
  const { id } = params;
  await connectToMongoDB();

  try {
    const response = await Topic.findByIdAndDelete(id);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
};

export const GET = async (_request, { params }) => {
  const { id } = params;
  await connectToMongoDB();

  try {
    const response = await Topic.findById(id);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
};

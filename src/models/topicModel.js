import mongoose from "mongoose";

const { Schema } = mongoose;

const topicSchema = new Schema(
  {
    topic: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);
export default Topic;

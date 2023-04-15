import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
      //   unique: true,
    },
    photo: {
      type: String,
      //   required: true,
    },
    userName: {
      type: String,
      //   defaulret: "",
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);

import mongoose from "mongoose";

export const mongoDbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    connection ? console.log("Mongo DB Connected") : console.log("error");
  } catch (error) {
    console.log(error);
  }
};

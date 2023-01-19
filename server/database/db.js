import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const url = process.env.url;

const Connection = async () => {
  try {
    await mongoose
      .connect(url, { useUnifiedTopology:true,useNewUrlParser: true })
      .then(console.log("success connection"));
  } catch (error) {
    console.log(error.message);
  }
};

export default Connection;

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect =  async() => {
  if (mongoose.connection.readyState === 1) {
    console.log("Already Connected To The Database");
    return;
  }
  
  if (mongoose.connection.readyState === 2) {
    console.log("Connecting...");
    return;
  }

  try{
    mongoose.connect(MONGODB_URI!, {
        dbName: 'pacy',
        bufferCommands: true
    });
    console.log("Connected To The Database")
  } catch (err:unknown) {
    console.log("Error: " , err);
  
  }
};

export default connect;
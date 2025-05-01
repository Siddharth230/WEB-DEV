import mongoose, { model, Schema, SchemaTypes } from "mongoose";
import { MONGOOSE_URL } from "./config";

export async function start() {
  try {
    await mongoose.connect(MONGOOSE_URL);
    console.log("Connected to database successfully!!");
  } catch (e) {
    console.log("❌ Failed to connect to database: ", e);
  }
}

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String
});

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
  title: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
  userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true}
}) 

export const ContentModel = model('Content', ContentSchema);
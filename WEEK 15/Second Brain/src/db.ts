import mongoose, { model, Schema, SchemaTypes } from "mongoose";
import { MONGOOSE_URL } from "./config";
import { ref } from "process";

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
  link: String,

  title: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
  userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true}
}) 

export const ContentModel = model('Content', ContentSchema);

const LinkSchema = new Schema({
  hash: String,
  userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true}
})

export const LinkModel = model('Link', LinkSchema);
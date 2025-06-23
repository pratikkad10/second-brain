import mongoose, { model, Schema, Types } from "mongoose";

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

export const userModel = model("User", userSchema);

const tagSchema = new Schema({
  title: { type: String, required: true, unique: true }
});

export const tagmodel = model("Tag", tagSchema);


const contentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, enum: ['image', 'video', 'article', 'audio'], required: true },
  title: { type: String, required: true },
  tags: [{ type: Types.ObjectId, ref: 'Tag' }],
  userId: { type: Types.ObjectId, ref: 'User', required: true },
});

export const contentModel = model("Content", contentSchema);

const linkSchema = new Schema({
  hash: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export const linkModel = model("Link", linkSchema);
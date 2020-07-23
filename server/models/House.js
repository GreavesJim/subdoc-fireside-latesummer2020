import mongoose from "mongoose";
const Schema = mongoose.Schema;
const person = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

const House = new Schema(
  {
    title: { type: String, required: true },
    address: { type: String, required: true },
    people: [person],
  },

  { timestamps: true, toJSON: { virtuals: true } }
);

export default House;

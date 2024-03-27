import { Schema, models, model } from "mongoose"

const userSchema = new Schema(
  {
    name: { type: String, required: true, unique: false },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
)

const User = models?.User || model("User", userSchema)

export default User

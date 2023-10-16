import mongoose, { Document, Schema } from "mongoose"

export interface UserInterface extends Document {
  username: string
  password: string
  rating?: number
  accountType?: "User" | "Admin"
  guild?: mongoose.Types.ObjectId
  friends: mongoose.Types.ObjectId[]
  lessonsCompleted: mongoose.Types.ObjectId[]
}

const userSchema: Schema<UserInterface> = new Schema<UserInterface>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: false,
      default: 0,
    },
    accountType: {
      type: String,
      required: false,
      default: "User",
    },
    guild: {
      type: Schema.Types.ObjectId,
      ref: "Guild",
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    lessonsCompleted: [
      {
        type: Schema.Types.ObjectId,
        ref: "Lesson",
      },
    ],
  },
  {
    timestamps: true,
  }
)

export default mongoose.model<UserInterface>("User", userSchema)

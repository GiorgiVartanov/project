import mongoose, { Document, Schema } from "mongoose"

export interface GuildInterface extends Document {
  name: string
  members: mongoose.Types.ObjectId[]
}

const guildSchema: Schema<GuildInterface> = new Schema<GuildInterface>({
  name: {
    type: String,
    required: true,
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
})

export default mongoose.model<GuildInterface>("Guild", guildSchema)

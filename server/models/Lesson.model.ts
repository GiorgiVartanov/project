import mongoose, { Document, Schema } from "mongoose"

export interface LessonInterface extends Document {
  image?: string
  title: string
  description: string
  length: string
  level: "Beginner" | "Intermediate" | "Advanced"
}

const lessonSchema: Schema<LessonInterface> = new Schema<LessonInterface>({
  image: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
    enum: ["Beginner", "Intermediate", "Advanced"],
  },
})

export default mongoose.model<LessonInterface>("Lesson", lessonSchema)

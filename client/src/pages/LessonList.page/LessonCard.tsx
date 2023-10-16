import { Link } from "react-router-dom"

import defaultLessonImage from "../../assets/image.png"

interface Props {
  image?: string
  title: string
  description: string
  length: string
  level: "Beginner" | "Intermediate" | "Advanced"
  id: string
  isLocked?: boolean
}

const LessonCard = ({ image, title, description, length, level, id, isLocked = false }: Props) => {
  return (
    <Link
      to={`./lesson/${id}`}
      className={`lesson-card ${isLocked ? "locked" : ""}`}
    >
      <img
        src={image || defaultLessonImage}
        alt={title}
      />
      <div className="lesson-information">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div>
          <span>{length}</span>
          <span>{level}</span>
        </div>
      </div>
    </Link>
  )
}
export default LessonCard

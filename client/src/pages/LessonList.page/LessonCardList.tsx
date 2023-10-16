import LessonCard from "./LessonCard"

interface LessonInterface {
  title: string
  description: string
  lessonLength: string
  level: "Beginner" | "Intermediate" | "Advanced"
  id: string
  isLocked: boolean
}

const LessonList: LessonInterface[] = [
  {
    title: "What is Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    lessonLength: "8 minutes 54 seconds",
    level: "Beginner",
    id: "0",
    isLocked: false,
  },
  {
    title: "What is Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    lessonLength: "8 minutes 17 seconds",
    level: "Beginner",
    id: "1",
    isLocked: false,
  },
  {
    title: "What is Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    lessonLength: "6 minutes 58 seconds",
    level: "Beginner",
    id: "2",
    isLocked: false,
  },
]

const LessonCardList = () => {
  return (
    <div className="lesson-card-list">
      {LessonList.map((lesson) => (
        <LessonCard
          title={lesson.title}
          description={lesson.description}
          length={lesson.lessonLength}
          level={lesson.level}
          id={lesson.id}
          key={lesson.id}
        />
      ))}
    </div>
  )
}
export default LessonCardList

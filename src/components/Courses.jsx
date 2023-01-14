import axios from "axios"
import { useEffect, useState } from "react"
import { CourseContainer, CoursesContainer } from "../styles/StyledComponents"
import Course from "./Course"

const Courses = ({ pathID, options }) => {

  const [coursesData, setCoursesData] = useState([])
  const opt = {...options, url: `https://frontend-project.staart.com/journeys/${pathID}/courses`}

  useEffect(() => {
    axios.request(opt)
    .then(fetch(opt.url))
    .then(json => setCoursesData(json.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <CoursesContainer>
      <h1>Cursos</h1>
      {
        coursesData.map(course => (
          <CourseContainer key={course.id}>
            <Course
              id={course.id}
              title={course.title}
              thumb={course.medias.thumb}
              description={course.description}
              duration={course.duration}
              level={course.level}
              tags={course.tags}
              instructor={course.instructor}
              modules={course.modules}
            />
          </CourseContainer>
        ))
      }
    </CoursesContainer>
  )
}

export default Courses

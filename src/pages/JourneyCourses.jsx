import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  CourseInfoContainer,
  CourseLessonContainer,
  Head2Container
} from "../styles/StyledComponents"
import Logo from "../components/Logo"

const JourneyCourses = () => {
  let { id } = useParams()
  const [courseData, setCourseData] = useState([])

  const options = {
    method: 'GET',
    url: `https://frontend-project.staart.com/courses/${id}`
  }

  useEffect(() => {
    axios.request(options)
      .then(fetch(options.url))
      .then(json => setCourseData(json.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Logo />
      {!!courseData ? (
        <CourseInfoContainer>
          <Head2Container>{courseData.title}</Head2Container>
          <img src={courseData.medias?.thumb} alt="thumb" />
          <h1>Aulas Disponíveis</h1>
          {!!courseData.modules ? courseData.modules.map(module => (
            <CourseLessonContainer key={module.title}>
              <h2>{module.title}</h2>
            </CourseLessonContainer>
          )
          ) : null}
        </CourseInfoContainer>
      ) : null}
    </>
  )
}

export default JourneyCourses

import { Link } from "react-router-dom"
import {
  CenterTitle,
  ContainerLink,
  CourseDescription,
  CourseImageThumb,
  ImageAndDescription,
  Instructor,
  LevelParagraph,
  TagsContainer
} from "../styles/StyledComponents"

const Course = ({ title, thumb, description, duration, level, tags, instructor, id }) => {

  return (
    <ContainerLink>
      <Link to={`/courses/${id}`}>
        <CenterTitle>{title}</CenterTitle>
        <ImageAndDescription>
          {!!thumb ? <CourseImageThumb src={thumb} alt="thumb" /> : null}
          <CourseDescription>{description}</CourseDescription>
        </ImageAndDescription>
        <Instructor>Instrutor {instructor}</Instructor>
        <p>Duração: ~{Math.ceil(duration / 3600000)} h</p>
        <LevelParagraph>Level: {level}</LevelParagraph>
        <TagsContainer>{tags.map(tag => <p key={tag}>{tag.charAt(0)}{tag.slice(1).toLowerCase()}</p>)}</TagsContainer>
      </Link>
    </ContainerLink>
  )
}

export default Course

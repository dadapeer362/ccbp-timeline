// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import {
  CourseContainer,
  CourseTitleIconContainer,
  CourseHeading,
  CourseIconTimeContainer,
  CourseIconContainer,
  CourseTime,
  CourseDescription,
  CourseTagsContainer,
  CourseTagParagraph,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseData} = props
  const {courseTitle, description, tagsList, duration} = courseData
  return (
    <CourseContainer>
      <CourseTitleIconContainer>
        <CourseHeading>{courseTitle}</CourseHeading>
        <CourseIconTimeContainer>
          <CourseIconContainer>
            <AiFillClockCircle />
          </CourseIconContainer>
          <CourseTime>{duration}</CourseTime>
        </CourseIconTimeContainer>
      </CourseTitleIconContainer>
      <CourseDescription>{description}</CourseDescription>
      <CourseTagsContainer>
        {tagsList.map(eachTag => (
          <CourseTagParagraph key={eachTag.id}>
            {eachTag.name}
          </CourseTagParagraph>
        ))}
      </CourseTagsContainer>
    </CourseContainer>
  )
}

export default CourseTimelineCard

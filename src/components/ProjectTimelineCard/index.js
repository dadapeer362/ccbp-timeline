// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import {
  ProjectContainer,
  ProjectTitleIconContainer,
  ProjectImage,
  ProjectHeading,
  ProjectIconTimeContainer,
  ProjectIconContainer,
  ProjectTime,
  ProjectDescription,
  ProjectAnchorTag,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {projectData} = props
  const {
    projectTitle,
    imageUrl,
    description,
    duration,
    projectUrl,
  } = projectData
  return (
    <ProjectContainer>
      <ProjectImage src={imageUrl} alt="project" />
      <ProjectTitleIconContainer>
        <ProjectHeading>{projectTitle}</ProjectHeading>
        <ProjectIconTimeContainer>
          <ProjectIconContainer>
            <AiFillCalendar />
          </ProjectIconContainer>
          <ProjectTime>{duration}</ProjectTime>
        </ProjectIconTimeContainer>
      </ProjectTitleIconContainer>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectAnchorTag href={projectUrl} target="_blank">
        Visit
      </ProjectAnchorTag>
    </ProjectContainer>
  )
}

export default ProjectTimelineCard

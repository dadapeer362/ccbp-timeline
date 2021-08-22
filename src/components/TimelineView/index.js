// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import {TimeLineViewContainer, TimeLineViewHeading} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props
  const titleData = timelineItemsList.map(eachItem => ({
    title: eachItem.title,
  }))
  const onGetCard = details => {
    if (details.categoryId === 'COURSE') {
      return (
        <CourseTimelineCard
          key={details.id}
          categoryId={details.categoryId}
          courseData={details}
        />
      )
    }
    return (
      <ProjectTimelineCard
        key={details.id}
        categoryId={details.categoryId}
        projectData={details}
      />
    )
  }

  return (
    <TimeLineViewContainer>
      <TimeLineViewHeading>
        MY JOURNEY OF <br />
        CCBP 4.0
      </TimeLineViewHeading>
      <Chrono
        items={titleData}
        mode="VERTICAL_ALTERNATING"
        theme={{secondary: '#ffffff'}}
        slideShow="true"
      >
        {timelineItemsList.map(eachItem => onGetCard(eachItem))}
      </Chrono>
    </TimeLineViewContainer>
  )
}

export default TimelineView

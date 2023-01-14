import { Link } from 'react-router-dom'
import {
  ImageBanner,
  ImageThumb,
  JourneyContainer,
  JourneyDescription,
  JourneyDescriptionContainer, 
  JourneyInfo, 
  JourneyTag, 
  JourneyTitle, 
  LinkContainer 
} from '../styles/StyledComponents'

const JourneyItem = ({ thumb, description, group, title, banner, pathID }) => {
  return (
    <JourneyContainer>
      <Link to={`/journey/${pathID}`}>
        <LinkContainer>
          <JourneyInfo>
            <ImageThumb src={thumb} alt="thumb" />
            <JourneyTitle>{title}</JourneyTitle>
          </JourneyInfo>
          {!!banner ? <ImageBanner src={banner} alt="banner" /> : null}
          <JourneyDescriptionContainer>
            <JourneyDescription>{description}</JourneyDescription>
            <JourneyTag>{group}</JourneyTag>
          </JourneyDescriptionContainer>
        </LinkContainer>
      </Link>
    </JourneyContainer>
  )
}

export default JourneyItem

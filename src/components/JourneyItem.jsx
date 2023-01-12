import { Link } from 'react-router-dom'
import '../styles/JourneyItem.css'

const JourneyItem = ({ thumb, description, group, title, banner, pathID }) => {
  return (
    <div className="journey">
      <Link to={`/journey/${pathID}`}>
        <div>
          <img src={thumb} alt="thumb" />
          <h2>Jornada de {title}</h2>
        </div>
        {!!banner ? <img src={banner} alt="" className='banner' /> : null}
        <p>{description}</p>
        <p className='tag'>{group}</p>
      </Link>
    </div>
  )
}

export default JourneyItem

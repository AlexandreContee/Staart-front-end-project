import '../styles/JourneyItem.css'

const JourneyItem = ({ thumb, banner, description, group, title }) => {
  return (
    <div className="journey">
      <div>
        <img src={thumb} alt="thumb" />
        <h2>Jornada de {title}</h2>
      </div>
      <p>{description}</p>
      <p className='tag'>{group}</p>
    </div>
  )
}

export default JourneyItem

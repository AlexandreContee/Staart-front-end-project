const JourneyItem = ({ thumb, banner, description, group, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={thumb} alt="" />
      {banner ? <img src={banner} alt="" /> : null}
      <p>{description}</p>
      <p>{group}</p>
    </div>
  )
}

export default JourneyItem

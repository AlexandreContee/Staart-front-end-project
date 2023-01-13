const JourneySelection = ({ title, banner, group }) => {
  return (
    <div>
      <h2>{title}</h2>
      {!!banner ? <img src={banner} alt="banner" /> : null}
      <p>{group}</p>
    </div>
  )
}

export default JourneySelection

import JourneySelection from "../components/JourneySelection"

const Journey = ({ title, banner, group }) => {

  return (
    <>
      <JourneySelection title={title} banner={banner} group={group} />
    </>
  )
}

export default Journey

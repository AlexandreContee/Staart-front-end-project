import { useEffect, useState } from "react"
import JourneyItem from "./JourneyItem"

const Journeys = () => {

  const [journeys, setJourneys] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://frontend-project.staart.com/journeys')
      .then(data => data.json())
      .then(json => setJourneys(json))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div>
      <h1>Jornadas</h1>
      {isLoading ?
        (<div className="loader"></div>)
        : (journeys.map(journey => (
          <JourneyItem
            key={journey.pathID}
            title={journey.title}
            description={journey.description}
            group={journey.group}
            banner={journey.medias.banner}
            thumb={journey.medias.thumb}
          />
        )
        ))}
    </div>
  )
}

export default Journeys

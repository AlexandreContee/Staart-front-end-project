import { useEffect, useState } from "react"
import { 
  CenterTitle, 
  JourneysSelection, 
  Loader 
} from "../styles/StyledComponents"
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
    <JourneysSelection>
      <CenterTitle id="mainH2">Jornadas de aprendizado</CenterTitle>
      {isLoading ?
        <Loader />
        : (journeys.map(journey => {
          return (
            <JourneyItem
              key={journey.pathID}
              pathID={journey.pathID}
              title={journey.title}
              description={journey.description}
              group={journey.group}
              banner={journey.medias.banner}
              thumb={journey.medias.thumb}
            />
          )
        }))
      }
    </JourneysSelection>
  )
}

export default Journeys

import { useEffect, useState } from "react"
import JourneyItem from "./JourneyItem"
import '../styles/Journeys.css'

const Journeys = () => {

  const [journeys, setJourneys] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [input, setInput] = useState('')

  useEffect(() => {
    fetch('https://frontend-project.staart.com/journeys')
      .then(data => data.json())
      .then(json => setJourneys(json))
      .finally(() => setIsLoading(false))

  }, [])

  const handleFilter = () => {
    console.log(input)
  }

  return (
    <div className="journeys">
      <h1>Jornadas de aprendizado</h1>
      <div className="filter">
        <form onSubmit={handleFilter}>
          <span>Filtros</span>
          <select value={input} onChange={e => setInput(e.target.value)}>
            <option value="Default">Padrão</option>
            <option value="Number">Quantidade de cursos - maior pra menor</option>
            <option value="Alphabetical">Ordem alfabética</option>
          </select>
          <button type="submit">Filtrar</button>
        </form>
      </div>
      {isLoading ?
        (<div className="loader"></div>)
        : (journeys.map(journey => {
          return (
            <JourneyItem
              key={journey.pathID}
              title={journey.title}
              description={journey.description}
              group={journey.group}
              banner={journey.medias.banner}
              thumb={journey.medias.thumb}
            />
          )
        }))
      }
    </div>
  )
}

export default Journeys

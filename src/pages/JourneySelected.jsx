import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { 
  FlexDisplay, 
  Head1, 
  Head2, 
  ImageBanner, 
  ImageThumb, 
  Loader, 
  SelectedJourney, 
  SelectedJourneyContainer, 
  SelectedJourneyInfo 
} from "../styles/StyledComponents"
import Logo from "../components/Logo"
import Courses from "../components/Courses"


const JourneySelected = () => {

  let { pathID } = useParams()

  const options = {
    method: 'GET',
    url: `https://frontend-project.staart.com/journeys/${pathID}`
  }
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    
    axios.request(options)
      .then(fetch(options.url))
      .then(json => setData(json.data))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <SelectedJourneyContainer>
      <Logo />
      <SelectedJourney>
        {!isLoading ? (
          <SelectedJourneyInfo>
            <FlexDisplay>
              {!!data.medias?.thumb ? <ImageThumb src={data.medias.thumb} width={50} alt="thumb" /> : null}
              <Head1>Jornada de {data.title}</Head1>
            </FlexDisplay>
            <Head2>{data.description}</Head2>
            {!!data.medias?.banner ? <ImageBanner src={data.medias.banner} alt="banner" /> : null}
          </SelectedJourneyInfo>
          ) : <Loader />
        }
      </SelectedJourney>
      <Courses pathID={pathID} options={options} />
    </SelectedJourneyContainer>
  )
}

export default JourneySelected

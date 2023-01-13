import Journeys from '../components/Journeys'
import LoggedInHeader from '../components/LoggedInHeader'

const Home = () => {
  return (
    <div className='container'>
      <LoggedInHeader />
      <Journeys />
    </div>
  )
}

export default Home

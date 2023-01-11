import { useNavigate } from 'react-router-dom'
import Journeys from '../components/Journeys'
import { useAuth } from '../context'
import '../styles/Home.css'

const Home = () => {

  const { currentUser, logOut } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/login')
    } catch (error) {
      alert("Ocorreu um erro ao fazer logout")
    }
  }

  return (
    <div className='container'>
      <header>
        <nav>
          <span>{currentUser.email}</span>
          <button id='logout' onClick={handleLogout}>Sair</button>
        </nav>
      </header>
      <Journeys />
    </div>
  )
}

export default Home

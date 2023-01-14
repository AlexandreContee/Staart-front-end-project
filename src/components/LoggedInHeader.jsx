import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context'
import { 
  NavContainer, 
  UserContainer, 
  UserLogout 
} from '../styles/StyledComponents'
import Logo from './Logo'

const LoggedInHeader = () => {

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
    <>
      <Logo />
      <header>
        <NavContainer>
          <UserContainer>{currentUser.email}</UserContainer>
          <UserLogout onClick={handleLogout}>Sair</UserLogout>
        </NavContainer>
      </header>
    </>
  )
}

export default LoggedInHeader

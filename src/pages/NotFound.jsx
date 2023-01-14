import Logo from "../components/Logo"
import { NotFoundRouteContainer } from "../styles/StyledComponents"

const NotFound = () => {

  return (
    <NotFoundRouteContainer>
      <Logo />
      <h3>Ops! Rota não encontrada!</h3>
    </NotFoundRouteContainer>
  )
}

export default NotFound

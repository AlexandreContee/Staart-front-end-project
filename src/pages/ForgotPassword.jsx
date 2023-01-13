import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context"
import Logo from "../components/Logo"
import Title from "../components/Title"
import { 
  Button, 
  ForgotPasswordContainer, 
  ForgotPasswordFormContainer, 
  HeaderTitle, 
  InputField 
} from "../styles/StyledComponents"

const ForgotPassword = () => {

  const { resetPassword } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await resetPassword(email)
      alert('Email enviado com sucesso')
      navigate('/login')
    } catch (error) {
      alert('Ocorreu um erro ao enviar o email')
    }

    setIsLoading(false)
  }

  return (
    <>
      <Logo />
      <ForgotPasswordContainer>
        <Title />
        <ForgotPasswordFormContainer>
          <form onSubmit={handleFormSubmit}>
            <div>
              <HeaderTitle>Esqueci minha senha</HeaderTitle>
            </div>
            <div>
              <label>
                E-mail
                <InputField
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemplo@email.com"
                />
              </label>
            </div>
            <Button disabled={isLoading} type="submit">Enviar email</Button>
          </form>
          <div>
            <p><Link to='/signup'>Não possui uma conta? Cadastre-se</Link></p>
          </div>
        </ForgotPasswordFormContainer>
      </ForgotPasswordContainer>
    </>
  )
}

export default ForgotPassword

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context'
import Logo from '../components/Logo'
import Title from '../components/Title'
import {
  Button,
  FormContainer,
  HeaderTitle,
  InputField,
  LoginContainer,
  LoginFormContainer
} from '../styles/StyledComponents'

const Login = () => {

  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    if (password.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres")
      setIsLoading(false)
      return
    }

    try {
      await signIn(email, password)
      navigate('/')
    } catch (error) {
      alert("Ocorreu um erro ao fazer login")
    }

    setIsLoading(false)
    setPassword('')
    setEmail('')
  }

  return (
    <>
      <Logo />
      <LoginContainer>
        <FormContainer>
          <Title />
          <LoginFormContainer>
            <form onSubmit={handleFormSubmit}>
              <div>
                <HeaderTitle>Entre</HeaderTitle>
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
              <div>
                <label>
                  Senha
                  <InputField
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="senha"
                  />
                </label>
              </div>
              <div>
                <Button disabled={isLoading} type="submit">Entrar</Button>
              </div>
            </form>
            <div>
              <p><Link to='/signup'>Não possui uma conta? Cadastre-se</Link></p>
            </div>
            <div>
              <p><Link to='/forgot-password'>Esqueceu a senha?</Link></p>
            </div>
          </LoginFormContainer>
        </FormContainer>
      </LoginContainer>
    </>
  )
}

export default Login

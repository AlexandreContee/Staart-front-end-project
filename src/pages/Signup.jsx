import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context"
import Logo from "../components/Logo"
import Title from "../components/Title"
import {
  Button,
  CenterParagraph,
  HeaderTitle,
  InputField,
  SignUpContainer,
  SignUpFormContainer
} from "../styles/StyledComponents"

const Signup = () => {

  const navigate = useNavigate()
  const { signUp } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (password.length < 6) {
      setIsLoading(false)
      alert('A senha deve ter no mínimo 6 caracteres')
      return
    }

    if (password !== passwordConfirmation) {
      setIsLoading(false)
      alert('As senhas não conferem')
    }

    try {
      await signUp(email, password)
      alert('Cadastro realizado com sucesso!')
      navigate('/login')
    } catch (error) {
      console.log(error)
      alert('Ocorreu um erro ao cadastrar usuário')
    }

    setIsLoading(false)
  }

  return (
    <>
      <Logo />
      <SignUpContainer>
        <Title />
        <SignUpFormContainer>
          <form onSubmit={handleFormSubmit}>
            <div>
              <HeaderTitle>Cadastro de novo usuário</HeaderTitle>
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
              <label>
                Confirmação de senha
                <InputField
                  type="password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  placeholder="senha"
                />
              </label>
            </div>
            <div>
              <Button disabled={isLoading} type="submit">Cadastrar</Button>
            </div>
          </form>
          <div>
            <CenterParagraph>
              <Link to='/login'>Já possui uma conta? Faça login</Link>
            </CenterParagraph>
          </div>
        </SignUpFormContainer>
      </SignUpContainer>
    </>
  )
}

export default Signup

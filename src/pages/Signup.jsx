import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { useAuth } from "../context"
import '../styles/Signup.css'

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
    <div className="signup">
      <Header />
      <div className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <h2>Cadastro de novo usuário</h2>
          </div>
          <div>
            <label>
              E-mail
              <input
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
              <input
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
              <input
                type="password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                placeholder="senha"
              />
            </label>
          </div>
          <div>
            <button disabled={isLoading} type="submit">Cadastrar</button>
          </div>
        </form>
        <div>
          <p>
            <Link to='/login'>Já possui uma conta? Faça login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup

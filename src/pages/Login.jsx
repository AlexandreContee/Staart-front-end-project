import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useAuth } from '../context'
import '../styles/Signup.css'
import '../styles/Login.css'

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
    }

    try {
      await signIn(email, password)
      navigate('/')
    } catch (error) {
      alert("Ocorreu um erro ao fazer login")
    }

    setIsLoading(false)
  }

  return (
    <div className='login'>
      <Header />
      <div className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <h2>Login</h2>
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
            <button disabled={isLoading} type="submit">Entrar</button>
          </div>
        </form>
        <div>
          <p><Link to='/signup'>Não possui uma conta? Cadastre-se</Link></p>
        </div>
        <div>
          <p><Link to='/forgot-password'>Esqueceu a senha?</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login

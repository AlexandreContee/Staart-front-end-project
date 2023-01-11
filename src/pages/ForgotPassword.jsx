import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { useAuth } from "../context"
import "../styles/ForgotPassword.css"

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
    <div className='forgot'>
      <Header />
      <div className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <h2>Esqueci minha senha</h2>
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
          <button disabled={isLoading} type="submit">Enviar email</button>
        </form>
        <div>
          <p><Link to='/signup'>Não possui uma conta? Cadastre-se</Link></p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword

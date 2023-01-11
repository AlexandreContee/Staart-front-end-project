import { BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import AppRoutes from './Routes'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App

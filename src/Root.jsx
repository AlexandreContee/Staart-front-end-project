import App from "./App"
import { AuthProvider } from "./context"

const Root = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

export default Root

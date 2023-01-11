import { createContext, useContext, useEffect, useState } from "react"
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth"
import { auth } from '../firebase'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()

  const signUp = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass)
  }

  const signIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const updateEmailAddress = (newEmail) => {
    return updateEmail(currentUser, newEmail)
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{
      signUp,
      signIn,
      logOut,
      currentUser,
      updateEmailAddress,
      resetPassword
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

import { Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./components/PrivateRoute"
import { useEffect, useState } from "react"
// Components
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"
import JourneySelected from "./pages/JourneySelected"
import Home from "./pages/Home"
import NotFound from './pages/NotFound'
import JourneyCourses from "./pages/JourneyCourses"

const AppRoutes = () => {

  const [pathID, setPathID] = useState(window.location.href.split('/journey/')[1])
  const [id, setId] = useState(window.location.href.split('/courses/')[1])
  const [lessonID, setLessonID] = useState(window.location.href.split('/lesson/')[1])

  useEffect(() => {
    setPathID(window.location.href.split('/journey/')[1])
    setId(window.location.href.split('/courses/')[1])
    setLessonID(window.location.href.split('/lesson/')[1])
  }, [pathID, id, lessonID])

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      }
      />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/journey/:pathID" element={
        <PrivateRoute>
          <JourneySelected />
        </PrivateRoute>
      } />
      <Route path="/courses/:id" element={
        <PrivateRoute>
          <JourneyCourses />
        </PrivateRoute>
      } />
      <Route path="*" element={
        <NotFound />
      } />
    </Routes>
  )
}

export default AppRoutes

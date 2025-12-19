import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import MotionLayouts from '../pages/MotionLayouts'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/motion" element={<MotionLayouts />} />
      <Route path="/motion/:layoutId" element={<MotionLayouts />} />
    </Routes>
  )
}

export default AppRoutes

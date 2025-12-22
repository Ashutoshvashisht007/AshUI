import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import MotionLayouts from '../pages/MotionLayouts'
import ScrollAnimation from '../pages/ScrollAnimation'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/motion" element={<MotionLayouts />} />
      <Route path="/scroll" element={<ScrollAnimation />} />
      <Route path="/motion/:layoutId" element={<MotionLayouts />} />
      <Route path="/scroll/:scrollbarID" element={<ScrollAnimation />} />
    </Routes>
  )
}

export default AppRoutes

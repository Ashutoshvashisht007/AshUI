import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.tsx'

function App() {
  return (
    <BrowserRouter>
      <div className="p-10 max-w-[80vw] mx-auto border-l border-r border-gray-500 h-screen overflow-scroll scrollbar-hide">
        <h1 className="font-bold text-2xl text-center">Components</h1>
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App

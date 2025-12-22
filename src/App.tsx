import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.tsx'

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-[80vw] mx-auto border-gray-500 min-h-screen scrollbar-hide">
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App

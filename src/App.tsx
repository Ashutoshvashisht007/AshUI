import { useState } from 'react'
import Buttons from './builds/ui/button/Buttons'
import Dropdown from './builds/ui/dropdown/Dropdown'
import MotionLayout from './builds/motion/layout';
import Bento_Grids from './builds/bento-grids/Bento_Grids';

function App() {

  const components = ['Buttons', 'Dropdown', 'Motion Layout','Bento Grids'];
  const [selectedComponent, setSelectedComponent] = useState(components[1]);

  return (
    <div className='p-10 max-w-[80vw] mx-auto border-l border-r border-l-gray-500 border-r-gray-500 h-screen overflow-scroll scrollbar-hide'>
      <h1 className='font-bold text-2xl text-center'>Components</h1>
      <div className='mt-5 flex gap-4 items-center justify-center text-xl'>
        {
          components.map((component,idx) => <button onClick={()=> setSelectedComponent(component)} key={idx} className={`cursor-pointer hover:border-b hover:border-b-amber-50 ${selectedComponent === component ? 'border-b border-b-amber-50' : ''}`}>{component}</button>)
        }
      </div>
      {selectedComponent === 'Buttons' && <Buttons />}
      {selectedComponent === 'Dropdown' && <Dropdown />}
      {selectedComponent === 'Motion Layout' && <MotionLayout />}
      {selectedComponent === 'Bento Grids' && <Bento_Grids />}
    </div>
  )
}

export default App

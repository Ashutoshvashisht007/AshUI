import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Buttons from '../builds/ui/button/Buttons'
import Dropdown from '../builds/ui/dropdown/Dropdown'
import Bento_Grids from '../builds/bento-grids/Bento_Grids'
import Sidebar from '../builds/sidebars'
import AnimatedText from '../builds/ui/text/AnimatedText'
import CodingLanguages from '../builds/ui/languages/CodingLanguages'

const components = ['Buttons', 'Dropdown', 'Bento Grids', 'Motion Layouts', 'sidebar', 'Scroll Animation', 'Animated Text','Coding Languages']

const Home = () => {
  const [selected, setSelected] = useState('Buttons')
  const navigate = useNavigate()

  const handleClick = (item: string) => {
    if (item === 'Motion Layouts') {
      navigate('/motion')
    } 
    else if(item === 'Scroll Animation') {
      navigate('/scroll')
    }
    else {
      setSelected(item)
    }
  }

  return (
    <>
      <div className="mt-5 flex flex-col gap-2 justify-center text-xl">
        <h1 className="font-bold text-2xl text-center">Components</h1>
        <div className='flex gap-4 justify-center text-xl'>
        {components.map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className={`hover:border-b hover:border-amber-50 ${
              selected === item ? 'border-b border-amber-50' : ''
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {selected === 'Buttons' && <Buttons />}
      {selected === 'Dropdown' && <Dropdown />}
      {selected === 'Bento Grids' && <Bento_Grids />}
      {selected === 'sidebar' && <Sidebar />}
      {selected === 'Animated Text' && <AnimatedText />}
      {selected === 'Coding Languages' && <CodingLanguages />}
      </div>
    </>
  )
}

export default Home

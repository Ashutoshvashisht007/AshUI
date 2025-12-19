import { useNavigate } from 'react-router-dom'

const MotionLayout = () => {
  const navigate = useNavigate()

  const layouts = ['1st', '2nd']

  const handleClick = (layout: string) => {
    navigate(`/motion/${layout}`)
  }

  return (
    <div className="mt-10 flex gap-4">
      {layouts.map((layout) => (
        <button
          key={layout}
          onClick={() => handleClick(layout)}
          className='px-4 py-2 bg-neutral-700 text-white rounded hover:bg-neutral-600 cursor-pointer'
        >
          {layout} Layout
        </button>
      ))}
    </div>
  )
}

export default MotionLayout

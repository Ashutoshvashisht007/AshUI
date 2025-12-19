import { useParams, Link } from 'react-router-dom'
import { motionLayouts } from '../config/motionLayouts.config'

const MotionLayouts = () => {
  const { layoutId } = useParams()

  if (!layoutId) {
    return (
      <div className="mt-10">
        <h2 className="text-xl mb-4">Motion Layouts</h2>

        {Object.entries(motionLayouts).map(([key, layout]) => (
          <Link
            key={key}
            to={`/motion/${key}`}
            className="block underline mb-2"
          >
            {layout.title}
          </Link>
        ))}
      </div>
    )
  }

  const SelectedLayout = motionLayouts[layoutId as keyof typeof motionLayouts]?.component

  if (!SelectedLayout) {
    return <p>Layout not found</p>
  }

  return (
    <div className="mt-10">
      <Link to="/motion" className="underline text-sm">
        ← Back
      </Link>

      <SelectedLayout />
    </div>
  )
}

export default MotionLayouts

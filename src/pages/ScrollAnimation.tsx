import { Link, useParams } from 'react-router-dom'
import { scrollbarAnimation } from '../config/scrollbar.config'

const ScrollAnimation = () => {

    const { scrollbarID } = useParams();

    if (!scrollbarID) {
        return (
          <div >
            <h2 className="text-xl">Scrollbar Layouts</h2>
    
            {Object.entries(scrollbarAnimation).map(([key, scroll]) => (
              <Link
                key={key}
                to={`/scroll/${key}`}
                className="block underline mb-2"
              >
                {scroll.title}
              </Link>
            ))}
          </div>
        )
      }

    const SelectedLayout = scrollbarAnimation[scrollbarID as keyof typeof scrollbarAnimation]?.component
    
      if (!SelectedLayout) {
        return <p>Layout not found</p>
      }

    return (
        <div className=''>
            <SelectedLayout />
        </div>
    )
}

export default ScrollAnimation
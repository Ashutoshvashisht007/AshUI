import Grid from './clerk/Grid'
import Grid1 from './grid1/Grid1'

const Bento_Grids = () => {
  return (
    <div className='mt-10 flex flex-col gap-10'>
        <Grid1 />
        <Grid />
    </div>
  )
}

export default Bento_Grids
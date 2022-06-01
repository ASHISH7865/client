import CircularProgress from '@mui/material/CircularProgress';
import './Loader.scss'


const Loader = () => {
  return (
    <div className='loader'><CircularProgress color="success" /></div>
  )
}

export default Loader
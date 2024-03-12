import { Send } from '@mui/icons-material';
import './newsLetter.css';

const NewsLetter = () => {
  return (
    <div  className='newsletter'>
        <div className="input">
            <h1>NewsLetter</h1>
            <p>Get timely updates from your favourite products</p>
            <div className="input-container">
            <input type="email" placeholder='Enter email'/>
            <button><Send/></button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
import './styles.css';
import cat from './img/crying-cat.gif';
import heart from './img/heart-svgrepo-com.svg'
import { useState } from 'react';


export const App = () => {
    const [state, setState] = useState(0)
    
    const handleIncrement = () => {
        setState(state+1)
    }
    
    return (
        <div className = 'main'>
            <button onClick={handleIncrement} className='button'>
            share heart
            </button>
            <p>{state}</p>
            <img className='heart' src={heart}/>
            <img src={cat}/>
        </div>
    )
}
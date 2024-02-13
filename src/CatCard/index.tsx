import './styles.css';
import cat from '../img/crying-cat.gif';
import heart from '../img/heart-svgrepo-com.svg';
import happyBannana from '../img/banana-cat-heart.gif';
import happyCat from '../img/happy-happy-happy.gif'
import { useState } from 'react';

export const CatCard = () => {
    const [state, setState] = useState(0);
    
    const moreThanTen = state <= 20 && state >= 10
    const moreThanTwenty = state > 20;
    
    
   const handleIncrement = () => {
        setState(state+1)
    }
    return (
        <div className = 'cardWrapper'>
            <button onClick={handleIncrement} className='button'>
            share heart
            </button>
            <div className = 'count'>
                <p>{state}</p>
                <img src={heart} className='heart'/>
            </div>
            {moreThanTen && <img className='cat-pic' src={happyCat}/>}
            {moreThanTwenty && <img className='cat-pic' src={happyBannana}/>}
            {!moreThanTen && !moreThanTwenty && <img  className='cat-pic' src={cat}/>}
        </div>
    )
}
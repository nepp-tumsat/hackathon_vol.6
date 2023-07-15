import React from 'react';
import './screen1.css';

const Screen1 = () => {
    return (
        <div className='container'>
            <div className='title'>
                <h1>To Do <span className='highlight'>Vise</span></h1>
                <p>やることを<span className='highlight'>見える化</span>しよう！<br />下の表に書き、さあ始めよう！</p>
            </div>
            <div className='input-fields'>
                <input type='text' placeholder='名前' />
                <input type='text' placeholder='職業' />
                <input type='text' placeholder='趣味' />
                <input type='text' placeholder='趣味にかけるお金' />
            </div>
            <button className='continue-button' onClick={() => window.location.href='/screen2'}>
                To be continue... <span>→</span>
            </button>
        </div>
    );
}

export default Screen1;

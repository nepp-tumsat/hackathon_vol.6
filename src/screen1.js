import React, { useState } from 'react';
import './screen1.css';
import axios from 'axios';

const Screen1 = () => {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [hobby, setHobby] = useState("");
    const [hobbyCost, setHobbyCost] = useState("");

    const handleClick = async () => {
        if (!name || !job || !hobby || !hobbyCost) {
            alert("全てのフィールドを入力してください");
        } else {
            await axios.post('http://localhost:8000/gpt', {
                name,
                job,
                hobby,
                money: hobbyCost
            });
            window.location.href = '/screen2';
        }
    };

    return (
        <div className='container'>
            <div className='title'>
                <h1>To Do <span className='highlight'>Vise</span> !!! </h1>
                <p>やることを<span className='highlight'>見える化</span>しよう！<br />下の表に書き、さあ始めよう！</p>
            </div>
            <div className='input-fields'>
                <input type='text' placeholder='名前' value={name} onChange={e => setName(e.target.value)} />
                <input type='text' placeholder='職業' value={job} onChange={e => setJob(e.target.value)} />
                <input type='text' placeholder='趣味' value={hobby} onChange={e => setHobby(e.target.value)} />
                <input type='text' placeholder='趣味にかけるお金' value={hobbyCost} onChange={e => setHobbyCost(e.target.value)} />
            </div>
            <button className='continue-button' onClick={handleClick}>
                To be continue... <span>→</span>
            </button>
        </div>
    );
}

export default Screen1;

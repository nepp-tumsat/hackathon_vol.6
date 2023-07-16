import React, { useState, useEffect } from 'react';
import './screen2.css';
import axios from 'axios';

const Screen2 = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState('');
    const [completed, setCompleted] = useState(false);
    const [gptAdvice, setGptAdvice] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await axios.get('http://localhost:8000/tasks');
            setTasks(response.data);
        };
        fetchTasks();
    }, []);

    const addTask = async () => {
        const response = await axios.post('http://localhost:8000/tasks', { title, limit: deadline });
        setTasks([...tasks, response.data]);
        setTitle('');
        setDeadline('');
        setModalOpen(false);
    };

    const toggleCompletion = async index => {
        const task = tasks[index];
        await axios.put(`http://localhost:8000/tasks/${task.id}/done`);
        setTasks(tasks.map((task, i) => i === index ? {...task, completed: !task.completed} : task));
    };

    const fetchGptAdvice = async () => {
        const response = await axios.get('http://localhost:8000/gpt');
        setGptAdvice(response.data.advice);
    };

    return (
        <div>
            <div className='table'>
                <table>
                    <tbody>
                        <tr>
                            <th>完了</th>
                            <th>タイトル</th>
                            <th>期限</th>
                        </tr>
                        {tasks.map((task, index) => (
                            <tr key={index}>
                                <td><input type='checkbox' checked={task.done} onChange={() => toggleCompletion(index)} /></td>
                                <td>{task.title}</td>
                                <td>{task.limit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className='add-task-button' onClick={() => setModalOpen(true)}>タスクを追加</button>
            <button className='api-button' onClick={fetchGptAdvice}>やることを提案してもらう</button>
            {gptAdvice && <div className='gpt-advice'>{gptAdvice}</div>}
            {modalOpen && (
                <div className='modal' style={{display: 'block'}}>
                    <div className='modal-content'>
                        <span onClick={() => setModalOpen(false)}>&times;</span>
                        <p>タスクのタイトル: <input type='text' value={title} onChange={e => setTitle(e.target.value)} /></p>
                        <p>期限: <input type='date' value={deadline} onChange={e => setDeadline(e.target.value)} /></p>
                        <button onClick={addTask}>追加</button>
                        <button onClick={() => setModalOpen(false)}>キャンセル</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Screen2;

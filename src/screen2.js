import React, { useState } from 'react';
import './screen2.css';

const Screen2 = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState('');
    const [completed, setCompleted] = useState(false);

    const addTask = () => {
        setTasks([...tasks, { title, deadline, completed }]);
        setTitle('');
        setDeadline('');
        setCompleted(false);
        setModalOpen(false);
    };

    const toggleCompletion = index => {
        setTasks(tasks.map((task, i) => i === index ? {...task, completed: !task.completed} : task));
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
                    <td><input type='checkbox' checked={task.completed} onChange={() => toggleCompletion(index)} /></td>
                    <td>{task.title}</td>
                    <td>{task.deadline}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
            <button className='add-task-button' onClick={() => setModalOpen(true)}>タスクを追加</button>
            <button className='api-button'>やることを提案してもらう</button>
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

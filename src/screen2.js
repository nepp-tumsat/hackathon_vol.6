import React, { useState } from 'react';
import './screen2.css';

const Screen2 = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState('');
    const [content, setContent] = useState('');

    const addTask = () => {
        setTasks([...tasks, { title, deadline, content }]);
        setTitle('');
        setDeadline('');
        setContent('');
        setModalOpen(false);
    };

    return (
        <div>
            <div className='table'>
    <table>
        <tbody>
            <tr>
                <th>タイトル</th>
                <th>期限</th>
                <th>内容</th>
            </tr>
            {tasks.map((task, index) => (
                <tr key={index}>
                    <td>{task.title}</td>
                    <td>{task.deadline}</td>
                    <td>{task.content}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
            <button onClick={() => setModalOpen(true)}>タスクを追加</button>
            {modalOpen && (
                <div className='modal' style={{display: 'block'}}>
                    <div className='modal-content'>
                        <span onClick={() => setModalOpen(false)}>&times;</span>
                        <p>タスクのタイトル: <input type='text' value={title} onChange={e => setTitle(e.target.value)} /></p>
                        <p>期限: <input type='date' value={deadline} onChange={e => setDeadline(e.target.value)} /></p>
                        <p>内容: <input type='text' value={content} onChange={e => setContent(e.target.value)} /></p>
                        <button onClick={addTask}>追加</button>
                        <button onClick={() => setModalOpen(false)}>キャンセル</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Screen2;
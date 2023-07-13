import React from 'react';
import './screen1.css';

const Screen1 = () => {
    return (
        <div className='container'>
            <div className='title'>
                <h1>ToDoVise</h1>
                <p>やることを見える化しよう！<br />下の表に書き、さあ始めよう！</p>
            </div>
            <div className='table'>
                <table>
                    <tbody>
                        <tr>
                            <th>タイトル</th>
                            <th>期限</th>
                            <th>内容</th>
                        </tr>
                        <tr>
                            <td>デモタスク1</td>
                            <td>2023-07-20</td>
                            <td>これはデモタスクです。</td>
                        </tr>
                        <tr>
                            <td>デモタスク2</td>
                            <td>2023-07-21</td>
                            <td>これもデモタスクです。</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={() => window.location.href='/screen2'}>To be continue...</button>
        </div>
    );
}

export default Screen1;

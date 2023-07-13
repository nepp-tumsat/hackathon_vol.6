import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Screen1 from './screen1';
import Screen2 from './screen2';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Screen1 />} />
                <Route path="/screen2" element={<Screen2 />} />
            </Routes>
        </Router>
    );
}

export default App;
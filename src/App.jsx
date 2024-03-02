import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container } from '@mui/material'
import Login from './components/Login'
import { BrowserRouter as Router , Routes, Route, Navigate } from 'react-router-dom';

const Home = () => {
    return (
        <Container>
            <h1>Home</h1>
        </Container>
    )
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App

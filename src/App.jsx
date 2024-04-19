import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router , Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav'
import HomeHero from './components/Home/HomeHero'
import Home from './components/Home'
import Footer from "./components/Footer"

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

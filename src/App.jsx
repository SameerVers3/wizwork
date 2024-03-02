import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container } from '@mui/material'
import Login from './components/Login'

function App() {
    return (
        <Container>
            <Login />
        </Container>
    )
}

export default App

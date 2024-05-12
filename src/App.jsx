import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/auth/Login'
import { BrowserRouter as Router , Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/NavHome'
import HomeHero from './components/Home/HomeHero'
import Home from './components/Home'
import Footer from "./components/Footer"
import Job from "./components/Job"
import SideDoc from "./components/portal/Dashboard"
import Verify from "./components/auth/Verify"

import Rdashboard from './components/Recruiter/portal/Rdashboard'
import Avatar from '@mui/material/Avatar';

import ForgotPass from "./components/auth/ForgotPass"

import { UserContext } from './components/context/global'

import Signup from './components/auth/Signup'
import RecruiterHome from "./components/Recruiter/Home/Home"

const baseURL = import.meta.env.VITE_BACKEND_URL

function App() {

    const [user, setUser] = useState({
        isLoggedIn: false,
        email: "",
        isJobSeeker: true,
        isAdmin: false
    })

    useEffect(() => {
        const verify = async () => {

            const token = localStorage.getItem("userToken");
            console.log(token)
            
            if (token) {
            const response = await fetch(baseURL + "/auth/verifyToken", {
                method: "GET",
                headers: {
                        "Content-Type": "application/json",
                        Authorization: `${token}`,
                },
            })

            const data = await response.json();

                if (data.email) {
                    console.log("User already logged in")
                    setUser({
                        isLoggedIn: true,
                        email: data.email,
                        isJobSeeker: data.jobSeeker,
                        isAdmin: data.admin,
                        userData: data.userData
                    })
                }
                else {
                    console.log("User not logged in")
                    setUser({
                        isLoggedIn: false,
                        email: "",
                        isJobSeeker: true
                    })
                }
            
            }
        }

        verify()
    }, [])
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/job" element={<Job />} />
                    <Route path="/dashboard" element={<SideDoc />} />
                    <Route path="/verify" element={<Verify />} />
                    <Route path="/forgot-password" element={<ForgotPass />} />
                    <Route path="/recruiter" element={<RecruiterHome/>} />
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </Router>
        </UserContext.Provider>
    )
}

export default App

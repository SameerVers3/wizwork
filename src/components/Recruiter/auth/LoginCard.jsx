import react, { useState, useContext, useEffect } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { ShadButton } from '@/components/ui/button'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField, Button } from '@mui/material'
import { useNavigate } from "react-router-dom"
import { UserContext } from '../context/global'

const baseURL = import.meta.env.VITE_BACKEND_URL

const LoginCard = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);

    const handleEmail = (e) => {
        setEmailError(false)
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPasswordError(false)
        setPassword(e.target.value)
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    useEffect(() => {
        if (user.isLoggedIn) {
            navigate('/')
        }
    },  [])

    const handleLogin = async () => {
        setEmailError(false)
        setPasswordError(false)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (email === '') {
            setEmailError(true)
        } else if (!emailRegex.test(email)) {
            setEmailError(true)
        }
        if (password === '') {
            setPasswordError(true)
        }

        try {
            setLoading(true);

            const response = await fetch(baseURL + '/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })

            const data = await response.json()

            if (data.success) {
                console.log('User logged in successfully')
                localStorage.setItem('userToken', data.accessToken)
                console.log(data)
                setUser({
                    isLoggedIn: true,
                    email: data.email,
                    isJobSeeker: data.jobSeeker,
                    isAdmin: data.admin,
                    accessToken: data.accessToken,
                    userData: data.userData
                })

                

                navigate('/r/dashboard')
            }
            else {
                console.log('User login failed')
                setEmailError(true)
                setPasswordError(true)
            }
        } catch {
            
        }
    }

    const handleForgotPassword = () => {
        navigate('/r/forgot-password')
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-center mb-8">
                    Welcome to WizWork Recruiter !
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">

                <TextField
                    size="small"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={handleEmail}
                    fullWidth
                    error={emailError}
                />

                <TextField
                    error={passwordError}
                    size="small"
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    value={password}
                    onChange={handlePassword}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    fullWidth
                />
                <div className="flex justify-end">
                    <a
                        className="mr-4 underline hover:text-indigo-600"
                        onClick={handleForgotPassword}
                    >
                        Forgot Password{' '}
                    </a>
                </div>
            </CardContent>

            <CardFooter className="flex justify-center flex-col items-center">
                <Button fullWidth variant="contained" onClick={handleLogin}>
                    Login
                </Button>

                <div className="mt-5">
                    <h4 className="text-neutral-400">
                        New to WizWork
                        <a
                            className="ml-2 underline text-black hover:text-indigo-600"
                            onClick={() => navigate("/signup")}
                        >
                            Register Here{' '}
                        </a>
                    </h4>
                </div>
            </CardFooter>
        </Card>
    )
}

export default LoginCard

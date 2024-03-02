import react, { useState } from 'react'
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

const LoginCard = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

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

    const handleLogin = () => {
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
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-center mb-8">
                    Welcome to WizWork !
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
                <ShadButton className="bg-white text-black border border-gray-300 hover:bg-gray-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        className="w-12 h-12 p-2"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#FFC107"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                        <path
                            fill="#FF3D00"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        ></path>
                        <path
                            fill="#4CAF50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        ></path>
                        <path
                            fill="#1976D2"
                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                    </svg>
                    Sign in with google
                </ShadButton>

                <div class="flex items-center">
                    <div class="flex-grow bg bg-gray-300 h-0.5"></div>
                    <div class="flex-grow-0 mx-2 text-gray">or </div>
                    <div class="flex-grow bg bg-gray-300 h-0.5"></div>
                </div>

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
                        href="#"
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
                            href="#"
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

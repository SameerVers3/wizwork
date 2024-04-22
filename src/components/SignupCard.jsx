import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
} from '@/components/ui/card'
import { Button, TextField, IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';

const SignUpCard = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errMsg, setErrMsg] = useState("")

    const [showSnackbar, setShowSnackbar] = useState(false)

    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        phoneNumber: false,
        email: false,
        password: false,
        confirmPassword: false
    })

    const handleInputChange = (field, value) => {
        setErrors({...errors, [field]: false})
        switch(field) {
            case 'firstName':
                setFirstName(value)
                break
            case 'lastName':
                setLastName(value)
                break
            case 'phoneNumber':
                // only numbers allowed
                value = value.replace(/\D/g, '')
                setPhoneNumber(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break
            case 'confirmPassword':
                setConfirmPassword(value)
                break
            default:
                break
        }
    }

    const validateAndSignUp = async () => {
        let tempErrors = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        
        // Phone number regex to allow only numbers and spaces with a length of 11
        const phoneRegex = /^[\d\s]{11}$/

        tempErrors.firstName = !firstName
        tempErrors.lastName = !lastName
        tempErrors.phoneNumber = !phoneRegex.test(phoneNumber)
        tempErrors.email = !emailRegex.test(email)
        tempErrors.password = !password
        tempErrors.confirmPassword = password !== confirmPassword || !confirmPassword

        setErrors(tempErrors)
        setErrMsg("")
        if (tempErrors.password) {
            setErrMsg("Password is required")
        } else if (tempErrors.confirmPassword) {
            setErrMsg("Passwords do not match")
        } else if (tempErrors.email) {
            setErrMsg("Invalid email")
        } else if (tempErrors.phoneNumber) {
            setErrMsg("Invalid phone number")
        } else if (tempErrors.firstName) {
            setErrMsg("First name is required")
        } else if (tempErrors.lastName) {
            setErrMsg("Last name is required")
        }



        if (Object.values(tempErrors).every(error => !error)) {
            console.log('Submit form') // Here you would handle the API call or further validation
            try {
                const response = await fetch('http://localhost:3000/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        phoneNumber,
                        email,
                        password
                    })
                })
                
                const data = await response.json()
                console.log(data)
                if (data.success) {
                    console.log('User signed up successfully')
                    // Redirect to the login page

                }
                else {
                    console.error(data.message)
                    setErrMsg(data.message)
                    showSnackbar(true)
                }
            } catch (error) {
                console.error('Error:', error)
                errMsg = "An error occurred. Please try again later."
                showSnackbar(true)
            }
        }
        else {
            setShowSnackbar(true)
        }
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-center mb-8">
                    Create Your Account
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
                <div className='flex gap-5'>
                    <TextField
                        error={errors.firstName}
                        label="First Name"
                        value={firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        fullWidth
                    />
                    <TextField
                        error={errors.lastName}
                        label="Last Name"
                        value={lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        fullWidth
                    />
                </div>
                <TextField
                    error={errors.phoneNumber}
                    label="Phone Number"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    fullWidth
                />
                <TextField
                    error={errors.email}
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    fullWidth
                />
                <TextField
                    error={errors.password}
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    value={password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    fullWidth
                />
                <TextField
                    error={errors.confirmPassword}
                    type={showPassword ? 'text' : 'password'}
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    fullWidth
                />
            </CardContent>

            <CardFooter className="flex justify-center flex-col items-center">
                <Button fullWidth variant="contained" onClick={validateAndSignUp}>
                    Sign Up
                </Button>
            </CardFooter>
            <Snackbar
                open={showSnackbar}
                onClose={() => setShowSnackbar(false)}
                TransitionComponent={Fade}
                message={errMsg}
                key={Fade}
                autoHideDuration={1200}
            />
        </Card>
    )
}

export default SignUpCard

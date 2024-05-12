import react from "react"
import { Card, CardContent, TextField, Button, Typography } from '@mui/material';


const ForgotPass = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-96">
                <ForgotPassCard />
            </div>
        </div>
    )
}

const ForgotPassCard = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        try {
            // Send email to reset password
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Card variant="outlined" sx={{ maxWidth: 400 }}>
            <CardContent>
                <Typography variant="h5" component="h1" gutterBottom>
                    Forgot Password
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                    Enter your email to reset your password
                </Typography>
                <form>
                    <TextField
                        type="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Reset Password
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default ForgotPass
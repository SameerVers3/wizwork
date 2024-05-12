import react from "react"	

const Profile = () => {
    return (
        <div>
            <div>
                Profile picture
            </div>

            <div>
                <TextField
                    error={errors.email}
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
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
                    error={errors.email}
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
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

                
            </div>
        </div>
    )
}

export default Profile;
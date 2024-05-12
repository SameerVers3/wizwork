import react, { useContext, useState } from "react"
import logo from "../assets/logo.svg"
import { useNavigate } from "react-router-dom"
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { UserContext } from "../components/context/global"

const Nav = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate()

    const navigateToJob = () => {
        navigate("/job");
    }

    const navigateToHome = () => {
        navigate("/");
    }

    const navigateToLogin = () => {
        navigate("/login");
    }

    const navigateToSign = () => {
        navigate("/signup");
    }

    const { user, setUser } = useContext(UserContext);

    const handleLogout = () => {
        setUser({
            isLoggedIn: false,
            email: "",
            isJobSeeker: true,
            isAdmin: false
        })
        localStorage.removeItem("userToken")
        navigate("/")
    }

    const navigateToRecruiter = () => {
        navigate("/recruiter")
    }

    const handleDashboard = () => {
        if (user.isAdmin) {
            navigate("/r/dashboard")
        }
        else {
            navigate("/dashboard")
        }
    }

    return (
        <div className="h-16 flex justify-between z-1000">
            <div className="flex">
                <a className="my-auto" onClick={navigateToHome} >
                    <img src={logo} alt="wizwork" className="h-12 cursor-pointer"/>
                </a>

                <div class="flex gap-8 my-auto mx-8 font-bold">
                    <a onClick={navigateToJob} class="cursor-pointer transition-colors duration-300 hover:text-blue-600">
                        <h2>Find Jobs</h2>
                    </a>
                    <a href="#" class="cursor-pointer transition-colors duration-300 hover:text-blue-600">
                        <h2>Browse Companies</h2>
                    </a>
                </div>
            </div>
            {
                user.isLoggedIn ?
                    <div className="my-auto">
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            <Typography sx={{ minWidth: 100 }}>{user.userData.firstName}</Typography>
                            <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                            </IconButton>
                            </Tooltip>
                        </Box>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                                },
                                '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                                },
                            },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >

                            <MenuItem onClick={handleDashboard}>
                            Dashboard
                            </MenuItem>
                            <Divider />

                            <MenuItem onClick={handleLogout}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </div>
                    :
                    <div className="my-auto flex gap-5">
                        <button className="h-10 px-8 rounded-lg rounded font-semibold text-blue-600 hover:bg-sky-50 hover:font-semibold" onClick={navigateToRecruiter}>
                            Recruiter
                        </button>
                        <button className="h-10 px-8 rounded-lg rounded font-semibold text-blue-600 hover:bg-sky-50 hover:font-semibold" onClick={navigateToLogin}>
                            Login
                        </button>

                        <button className="h-10 px-8 border bg-blue-600 text-white border-semibold rounded-lg hover:bg-blue-500" onClick={navigateToSign}>
                            Sign Up
                        </button>
                    </div>
            }

        </div>
    )
}

export default Nav;
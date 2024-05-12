import react from "react"
import logo from "../assets/logo.svg"
import {useNavigate} from "react-router-dom"

const NavJobs = (props) => {
    const active = props.active
    let Jobclasses = "cursor-pointer transition-colors duration-300 hover:text-blue-600"
    let Companyclasses = "cursor-pointer transition-colors duration-300 hover:text-blue-600"
    if (active === "jobs") {
        Jobclasses += " text-blue-600"
    }
    else if (active === "companies") {
        Companyclasses = " cursor-pointer text-blue-600"
    }

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    }

    const navigateToLogin = () => {
        navigate("/login");
    }

    const navigateToSign = () => {
        navigate("/signup");
    }

    
    return (
        <div className="h-16 flex justify-between z-1000 border px-4 md:px-36">
            <div className="flex">
                <a className="my-auto" onClick={navigateToHome}>
                    <img src={logo} alt="wizwork" className="h-12"/>
                </a>

                <div class="flex gap-8 my-auto mx-8 font-bold">
                    <a href="#" class={Jobclasses}>
                        <h2>Find Jobs</h2>
                    </a>
                    <a href="#" class="cursor-pointer transition-colors duration-300 hover:text-blue-600">
                        <h2>Browse Companies</h2>
                    </a>
                </div>
            </div>

            <div className="my-auto flex gap-5">
                <button className="h-10 px-8 rounded-lg rounded font-semibold text-blue-600 hover:bg-sky-50 hover:font-semibold" onClick={navigateToLogin}>
                    Login
                </button>

                <button className="h-10 px-8 border bg-blue-600 text-white border-semibold rounded-lg hover:bg-blue-500" onClick={navigateToSign}>
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default NavJobs;
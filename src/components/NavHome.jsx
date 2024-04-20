import react from "react"
import logo from "../assets/logo.svg"
import {useNavigate} from "react-router-dom"

const Nav = () => {

    const navigate = useNavigate()

    const navigateToJob = () => {
        navigate("/job")
    }

    return (
        <div className="h-16 flex justify-between z-1000">
            <div className="flex">
                <a className="my-auto">
                    <img src={logo} alt="wizwork" className="h-12"/>
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

            <div className="my-auto flex gap-5">
                <button className="h-10 px-8 rounded-lg rounded font-semibold text-blue-600 hover:bg-sky-50 hover:font-semibold">
                    Login
                </button>

                <button className="h-10 px-8 border bg-blue-600 text-white border-semibold rounded-lg hover:bg-blue-500">
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Nav;
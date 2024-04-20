import react from "react"
import { Container } from '@mui/material'
import Nav from "./NavHome"
import HomeHero from "./Home/HomeHero"
import background from "../assets/bg.jpg"
import HomeCategory from "./Home/HomeCategory"
import FeaturedJobs from "./Home/FeaturedJobs"
import LatestJobs from "./Home/LatestJobs"
import Footer from "./Footer"

const Home = () => {
    return (
        <div className="relative">
            <Container className="z-10 relative">
                <Nav/>
                <HomeHero/>
                <HomeCategory/>
                <FeaturedJobs/>
                <LatestJobs/>
            </Container>
            <div className="absolute w-screen h-screen top-0 z-0">
                <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-transparent to-black opacity-50" />
                <img src={background} alt="" className="w-full h-full object-cover backdrop-filter backdrop-blur-lg" />
            </div>
        </div>
    )
}

export default Home;
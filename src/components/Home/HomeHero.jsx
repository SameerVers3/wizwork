import react from "react"
import background from "../../assets/bg.jpg"
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const HomeHero = () => {
    return (
        <div className="w-full h-screen border">
            <div className="border w-2/3 mt-36 mx-auto">
                <h2 className="text-7xl font-bold text-center">Discover the Best Jobs </h2>
                <p className="mt-8 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate tempore quod, voluptatem, labore exercitationem quisquam est aut officiis perspiciatis veritatis tenetur. Reiciendis, omnis. Perspiciatis, vero.</p>
            </div>

            <div className="bg-white m-4 p-3 w-4/5 mx-auto mt-16 rounded-2xl">
                <div className="flex gap-4">
                    <div
                        className="flex border justify-center items-center w-full h-12"
                        >
                        <SearchIcon />
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Job title or keyword"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        </IconButton>
                        



                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                            <DirectionsIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero;
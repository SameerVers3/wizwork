import react from "react"
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

const JobSearch = () => {
    return (
        <div className="bg-gray-100 py-12 md:py-24">

            <div>
                <h2 className="text-7xl font-bold text-center">Discover the Best Jobs </h2>

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

export default JobSearch;

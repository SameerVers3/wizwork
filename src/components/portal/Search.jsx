import react from "react"
import JobSearch from "../Jobs/JobSearch";
import SideFilter from "../Jobs/SideFilter";
import JobResult from "../Jobs/JobResult";
const Search = () => {
    return (
        <div className="">
            
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

export default Search;
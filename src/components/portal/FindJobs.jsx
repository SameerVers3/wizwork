import react from "react"
import JobSearch from "../Jobs/JobSearch";
import SideFilter from "../Jobs/SideFilter";
import JobResult from "../Jobs/JobResult";
import Search from "../portal/Search";
const FindJobs = () => {
    return (
        <div className="">
            <div className="p-8 font-bold text-xl font-['Anek Odia']">
                FIND JOBS
            </div>
            {/* <JobSearch/> */}
            {/* <Search/> */}
            <div className="flex">
                <SideFilter/>
                <JobResult/>
            </div>
        </div>
    )
}

export default FindJobs;
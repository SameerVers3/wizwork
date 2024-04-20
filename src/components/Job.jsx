import react from "react"
import Nav from "./NavJobs"
import SideFilter from "./Jobs/SideFilter"
import JobResult from "./Jobs/JobResult"
import JobSearch from "./Jobs/JobSearch"
import FilterHeader from "./Jobs/FilterHeader"

const Job = () => {
    return (
        <div>
            <Nav active="jobs"/>
            <JobSearch/>
            <div className="mx-28 flex flex-col">
                <div className="flex flex-row mt-5">
                    <SideFilter/>
                    <div className="flex flex-col w-full border">
                    <FilterHeader/>
                    <JobResult/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Job;
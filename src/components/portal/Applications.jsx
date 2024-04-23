import react from "react"	
import DataTable from "./DataTable";

const Applications = () => {
    return (
        <div>
        <div className="border-y">
            <h1 className="font-bold text-xl p-8">YOUR APPLICATIONS</h1>
        </div>
        <div>
            <DataTable/>
        </div>
        </div>
    )
}

export default Applications;

import react from "react"

const FilterHeader = (props) => {

    const results = 73;

    return (
        <div className="mx-16 p-4 flex justify-between border">
            <div>
                <h1 className="text-2xl font-bold">All Jobs</h1>
                <h2 className="text-gray-400 text-sm">Showing {results} results</h2>
            </div>

            <div className="my-auto flex gap-2">
                <div className="font-semibold text-blue-600 flex items-center">Sort By:</div>
                <select className="rounded-lg p-1 border border-gray-300">
                    <option>Most Relevant</option>
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                </select>
            </div>
        </div>
    )
}

export default FilterHeader;
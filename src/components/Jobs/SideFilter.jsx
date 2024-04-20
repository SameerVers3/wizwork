import react, {useState} from "react"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { AdsClickRounded } from "@mui/icons-material";
import Checkbox from '@mui/material/Checkbox';


const SideFilter = (props) => {

    const [filter, setFilter] = useState([])
    
    const employmentType = [
        {
            id: 1,
            type: "Full Time",
            available: 10
        },
        {
            id: 2,
            type: "Part Time",
            available: 5
        },
        {
            id: 3,
            type: "Internship",
            available: 2
        },
        {
            id: 4,
            type: "Contract",
            available: 3
        },
        {
            id: 5,
            type: "Freelance",
            available: 4
        }
    ];

    const jobCategory = [
        {
            id: 1,
            category: "Technology",
            available: 10
        },
        {
            id: 2,
            category: "Engineering",
            available: 5
        },
        {
            id: 3,
            category: "Sales",
            available: 2
        },
        {
            id: 4,
            category: "Marketing",
            available: 3
        },
        {
            id: 5,
            category: "Design",
            available: 4
        },
        {
            id: 6,
            category: "Business",
            available: 5
        },
        {
            id: 7,
            category: "HR",
            available: 6
        },
        {
            id: 8,
            category: "Finance",
            available: 7
        }
    ];

    const jobExperience = [
        {
            id: 1,
            experience: "0-1 Years",
            available: 10
        },
        {
            id: 2,
            experience: "1-3 Years",
            available: 5
        },
        {
            id: 3,
            experience: "3-5 Years",
            available: 2
        },
        {
            id: 4,
            experience: "5-10 Years",
            available: 3
        },
        {
            id: 5,
            experience: "10+ Years",
            available: 4
        }
    ];

    const salary = [
        {
            id: 1,
            range: "0-1 Lakhs",
            available: 10
        },
        {
            id: 2,
            range: "1-3 Lakhs",
            available: 5
        },
        {
            id: 3,
            range: "3-5 Lakhs",
            available: 2
        },
        {
            id: 4,
            range: "5-10 Lakhs",
            available: 3
        },
        {
            id: 5,
            range: "10+ Lakhs",
            available: 4
        }
    ]

    const [showEmploymentType, setShowEmploymentType] = useState(true);
    const [showJobCategory, setShowJobCategory] = useState(true);
    const [showJobExperience, setShowJobExperience] = useState(true);
    const [showSalary, setShowSalary] = useState(true);
    

    return (
        <>
            <div className="w-2/5 md:w-1/5">
                <div className="p-4 bg-white rounded-xl border">
                    {/* <h1 className="text-xl font-bold">Filter</h1> */}
                    <div className="mt-4 ">
                        <div className="flex max-w-[300px] justify-between my-3 cursor-pointer rounded-xl px-3 py-3 hover:bg-blue-50" onClick={() => {setShowEmploymentType(!showEmploymentType)}}>
                            <h1 className="text-lg font-bold">Type of Employment</h1>
                            {showEmploymentType ? <KeyboardArrowUpOutlinedIcon onClick={() => setShowEmploymentType(false)} /> : <KeyboardArrowDownOutlinedIcon onClick={() => setShowEmploymentType(true)} />}
                        </div>
                        {
                            showEmploymentType &&
                            <div className="px-4 py-2 rounded-2xl bg-slate-50">
                                {showEmploymentType && employmentType.map((type) => (
                                    <div className="flex items-center mt-1">
                                        <label className="w-full rounded-2xl hover:bg-blue-50">
                                            <Checkbox />
                                            <span>{type.type} ({type.available})</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        }

                    </div>
                    <div className="mt-4">
                        <div className="flex max-w-[300px] justify-between my-3 cursor-pointer rounded-xl px-3 py-3  hover:bg-blue-50" onClick={() => {setShowJobCategory(!showJobCategory)}}>
                            <h1 className="text-lg font-bold">Categories</h1>
                            {showJobCategory ? <KeyboardArrowUpOutlinedIcon onClick={() => setShowJobCategory(false)} /> : <KeyboardArrowDownOutlinedIcon onClick={() => setShowJobCategory(true)} />}
                        </div>
                        {
                            showJobCategory &&
                            <div className="px-4 py-2 rounded-2xl bg-slate-50">
                                {showJobCategory && jobCategory.map((category) => (
                                    <div className="flex items-center mt-1">
                                        <label className="w-full rounded-2xl hover:bg-blue-50">
                                            <Checkbox />
                                            <span>{category.category} ({category.available})</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                    <div className="mt-4">
                        <div className="flex max-w-[300px] justify-between my-3 cursor-pointer rounded-xl px-3 py-3 hover:bg-blue-50" onClick={() => {setShowJobExperience(!showJobExperience)}} >
                            <h1 className="text-lg font-bold">Job Level</h1>
                            {showJobExperience ? <KeyboardArrowUpOutlinedIcon  /> : <KeyboardArrowDownOutlinedIcon/>}
                        </div>
                        {
                            showJobExperience &&
                            <div className="px-4 py-2 rounded-2xl bg-slate-50">
                                {showJobExperience && jobExperience.map((experience) => (
                                    <div className="flex items-center mt-1">
                                        <label className="w-full rounded-2xl hover:bg-blue-50">
                                            <Checkbox />
                                            <span>{experience.experience} ({experience.available})</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                    <div className="mt-4">
                        <div className="flex max-w-[300px] justify-between my-3 cursor-pointer rounded-xl px-3 py-3 hover:bg-blue-50" onClick={() => {setShowSalary(!showSalary)}}>
                            <h1 className="text-lg font-bold">Salary Range</h1>
                            {showSalary ? <KeyboardArrowUpOutlinedIcon onClick={() => setShowSalary(false)} className=" rounded-full hover:bg-gray-50"/> : <KeyboardArrowDownOutlinedIcon onClick={() => setShowSalary(true)} />}
                        </div>
                        {
                            showSalary &&
                            <div className="px-4 py-2 rounded-2xl bg-slate-50">
                                {showSalary && salary.map((sal) => (
                                    <div className="flex items-center mt-1">
                                        <label className="w-full rounded-2xl hover:bg-blue-50">
                                            <Checkbox />
                                            <span>{sal.range} ({sal.available})</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default SideFilter;
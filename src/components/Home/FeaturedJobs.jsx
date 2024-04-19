import react from "react"

const getTag = (tag) => {
    let color = "";
    let bg = "";

    if (tag === "Technology") {
        color = "text-blue-600";
        bg = "bg-blue-50";
    }
    else if (tag === "Engineering") {
        color = "text-green-600";
        bg = "bg-green-50";
    }
    else if (tag === "Sales") {
        color = "text-yellow-600";
        bg = "bg-yellow-50";
    }
    else if (tag === "Marketing") {
        color = "text-red-600";
        bg = "bg-red-50";
    }
    else if (tag === "Design") {
        color = "text-purple-600";
        bg = "bg-purple-50";
    }
    else if (tag === "Business") {
        color = "text-indigo-600";
        bg = "bg-indigo-50";
    }
    else if (tag === "HR") {
        color = "text-pink-600";
        bg = "bg-pink-50";
    }
    else if (tag === "Finance") {
        color = "text-gray-600";
        bg = "bg-gray-50";
    }
    else {
        color = "text-gray-600";
        bg = "bg-gray-50";
    }

    return (
        <p className={`p-1 px-2 rounded-xl ${bg} ${color}`}>{tag}</p>
    )

}

const JobBox = (prop) => {

    const icon = prop.icon;
    const title = prop.title;
    const company = prop.company;
    const location = prop.location;
    const tags = prop.tags;
    const type = prop.type;
    
    let description = prop.description;
    if (description.length > 60) {
        description = description.substring(0, 60) + "...";
    }

    return (
        <div className="border flex flex-col justify-left p-6 gap-2 rounded-2xl hover:bg-[#f2fbff] hover:border-[#7db1ff] cursor-pointer relative">
            <div className="absolute p-1 border top-6 right-2 border-[#8756e3] text-[#8756e3] rounded-lg text-[14px]">{type}</div>
            <div className="border max-h-10 w-10 object-cover rounded-full ">
                <img className="h-10 " src={icon} alt={company} />
            </div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="tetx-gray-600 ">{company} - {location}</p>
            <p className="text-sm">{description}</p>
            <div className="flex gap-2 flex-wrap my-auto">
                {tags.map((tag) => getTag(tag))}
            </div>
        </div>
    );
}


const FeaturedJobs= () => {

    const jobs = [
        {
            icon: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/544/Google__G__Logo-512.png",
            title: "Email Marketing",
            company: "Google",
            location: "New York",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatem.",
            tags : ["Marketing", "Sales", "Technology"],
            type: "Full Time"
        },
        {
            icon: "",
            title: "Software Engineer",
            company: "Facebook",
            location: "California",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatem.",
            tags : ["Technology", "Engineering"],
            type: "Full Time"
        },
        {
            icon: "",
            title: "UX Designer",
            company: "Amazon",
            location: "Washington",
            description: "Lorem ipsum fdefer fed ed ed e de d ed ed e d xexe xex ex ex e dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatem.",
            tags : ["Design", "Technology"],
            type: "Remote"
        },
        {
            icon: "",
            title: "Product Manager",
            company: "Microsoft",
            location: "Washington",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatem.",
            tags : ["Business", "Technology"],
            type: "Full Time"
        },
        {
            icon: "",
            title: "HR Manager",
            company: "Apple",
            location: "California",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatem.",
            tags : ["HR", "Business"],
            type: "Full Time"
        },
        {
            icon: "",
            title: "Finance Manager",
            company: "Tesla",
            location: "California",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatem.",
            tags : ["Finance", "Business"],
            type: "Full Time"
        },
        {
            icon: "",
            title: "Sales Manager",
            company: "Twitter",
            location: "New York",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatem.",
            tags : ["Sales", "Business"],
            type: "Full Time"
        },
        {
            icon: "",
            title: "Data Scientist",
            company: "LinkedIn",
            location: "California",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatem.",
            tags : ["Technology", "Engineering"],
            type: "Full Time"
        }
    ]


    return (
        <div className="p-5 border">
            <h2 className="text-4xl font-bold">Explore by <span className=" text-blue-600">category</span></h2>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {jobs.map((job) => (
                        <JobBox icon={job.icon} title={job.title} company={job.company} location={job.company} description={job.description} tags={job.tags} key={job.title} type={job.type}/>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default FeaturedJobs; 
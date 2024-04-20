import react from "react"

const Data = [
    {
        icon: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/544/Google__G__Logo-512.png",
        title: "Somethingyy",
        company: "Google",
        location: "Paris",
        type:"full-time",
        tags: ["Technology", "Engineering", "Sales"]
    },
    {
         icon: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/544/Google__G__Logo-512.png",
        title: "Somethingyy",
        company: "Google",
        location: "Paris",
        type:"full-time",
        tags: ["Technology", "Engineering", "Sales"]
    },
    {
         icon: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/544/Google__G__Logo-512.png",
        title: "Somethingyy",
        company: "Google",
        location: "Paris",
        type:"full-time",
        tags: ["Technology", "Engineering", "Sales"]
    },
    {
         icon: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/544/Google__G__Logo-512.png",
        title: "Somethingyy",
        company: "Google",
        location: "Paris",
        type:"full-time",
        tags: ["Technology", "Engineering", "Sales"]
    },
    {
         icon: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/544/Google__G__Logo-512.png",
        title: "Somethingyy",
        company: "Google",
        location: "Paris",
        type:"full-time",
        tags: ["Technology", "Engineering", "Sales"]
    },
    {
         icon: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/544/Google__G__Logo-512.png",
        title: "Somethingyy",
        company: "Google",
        location: "Paris",
        type:"full-time",
        tags: ["Technology", "Engineering", "Sales"]
    },
    {
         icon: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/544/Google__G__Logo-512.png",
        title: "Somethingyy",
        company: "Google",
        location: "Paris",
        type:"full-time",
        tags: ["Technology", "Engineering", "Sales"]
    },
    {
         icon: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/544/Google__G__Logo-512.png",
        title: "Somethingyy",
        company: "Google",
        location: "Paris",
        type:"full-time",
        tags: ["Technology", "Engineering", "Sales"]
    },
]

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
    
    let description = "hello";
    if (description.length > 60) {
        description = description.substring(0, 60) + "...";
    }

    return (
        <div className="border flex flex-row align-center p-3 gap-2 rounded-2xl hover:bg-[#f2fbff] hover:border-[#7db1ff] cursor-pointer w-5/6 mx-auto">
            <div className="h-12 object-cover rounded-full my-auto mr-5">
                <img className="h-12 w-12 " src={icon} alt={company} />
            </div>
            <div className="flex flex-row justify-between w-full">
                <div className="flex-col">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-gray-500 ">{company} - {location}</p>
                    <div className="flex ">

                        <div className="bg-green-100 text-green-500 rounded-xl my-auto text-center p-1 px-2">
                            {type}
                        </div>

                        <div className="border-l mx-2"></div>

                        <div className="flex gap-2 flex-wrap my-auto">
                            {tags.map((tag) => getTag(tag))}
                        </div>
                    </div>
                </div>
            </div>

            <button className="bg-blue-600 h-10 my-auto px-5 text-white rounded-lg hover:bg-blue-500">
                Apply
            </button>
        </div>
    );
}

const JobResult = () => {


    return (
        <div className="w-full flex flex-col gap-10">
            {Data.map((data) => (
                <JobBox icon={data.icon} title={data.title} company={data.company} location={data.location} tags={data.tags} type={data.type} />
            ))}
        </div>
    )
}

export default JobResult;
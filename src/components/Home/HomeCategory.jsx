import react from "react"
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

const Box = (prop) => {

    const design = prop.icon;
    const title = prop.title;
    const availableJobs = prop.availableJobs;

    const getIcon = (design) => {
        switch(design) {
            case "design":
                return <DesignServicesOutlinedIcon style={{ fontSize: 40, color: "#A020F0" }}/>
            case "sales":
                return <InsightsOutlinedIcon style={{ fontSize: 40, color: "#A020F0" }}/>
            case "marketing":
                return <CampaignOutlinedIcon style={{ fontSize: 40, color: "#A020F0" }}/>
            case "finance":
                return <PaymentsOutlinedIcon style={{ fontSize: 40, color: "#A020F0" }}/>
            case "technology":
                return <TerminalOutlinedIcon style={{ fontSize: 40, color: "#A020F0" }}/>
            case "engineering":
                return <ArchitectureOutlinedIcon style={{ fontSize: 40, color: "#A020F0" }}/>
            case "business":
                return <BusinessCenterOutlinedIcon style={{ fontSize: 40, color: "#A020F0" }}/>
            case "hr":
                return <GroupsOutlinedIcon style={{ fontSize: 40, color: "#A020F0" }}/>
            default:
                return null;
        }
    }

    return (
        <div className="border flex flex-col justify-left p-6 gap-2 rounded-2xl hover:bg-[#f2fbff] hover:border-[#7db1ff] cursor-pointer">
            <div className="flex ">
                {getIcon(design)}
            </div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{availableJobs} jobs available</p>
        </div>
    )
}


const HomeCategory = () => {

    const categories = [
        {
            icon: "design",
            title: "Design",
            availableJobs: 100
        },
        {
            icon: "sales",
            title: "Sales",
            availableJobs: 100
        },
        {
            icon: "marketing",
            title: "Marketing",
            availableJobs: 100
        },
        {
            icon: "finance",
            title: "Finance",
            availableJobs: 100
        },
        {
            icon: "technology",
            title: "Technology",
            availableJobs: 100
        },
        {
            icon: "engineering",
            title: "Engineering",
            availableJobs: 100
        },
        {
            icon: "business",
            title: "Business",
            availableJobs: 100
        },
        {
            icon: "hr",
            title: "HR",
            availableJobs: 100
        }
    ]

    return (
        <div className="p-5 border">
            <h2 className="text-4xl font-bold">Explore by <span className=" text-blue-600">category</span></h2>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {categories.map((category) => (
                        <Box icon={category.icon} title={category.title} availableJobs={category.availableJobs} key={category.title}/>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default HomeCategory; 
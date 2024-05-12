import react, { useContext, useEffect } from "react"
import { useState } from "react"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

import Applications from "./Applications";
import Messages from "./Messages";
import Profile from "./Profile";
import Home from "./Home";
import Companies from "./Companies";
import Jobs from "./FindJobs";

import { UserContext } from "../context/global"

import logo from "../../assets/logo.svg"

const DocBtn = (props) => {
    console.log("Hellpoooo")
    //also change the color of the text and icon

    const color = props.item.active ? props.item.activeColor : props.item.inactiveColor;
    const side = props.item.active ? props.item.border : "";
    const bg = props.item.active ? `bg-[#E9EBFD]` : "";
    return (
        <div className={`border-l border-l-4 pl-3 ${side} my-1 mx-0.5`}>
            <div className={`flex gap-2 py-1 items-center cursor-pointer ${bg} rounded-lg`} onClick={props.handleClicked}>
                <div className={`w-10 h-10 flex justify-center items-center ${color}`}>
                    {props.item.icon}
                </div>
                <p className={props.item.active ? props.item.activeColor : props.item.inactiveColor}>{props.item.name}</p>
            </div>
        </div>
    )
}

const SideDoc = () => {

    const { user } = useContext(UserContext);

    useEffect(() => {
        if (!user) {
            window.location.href = "/login"
        }
        else if (!user.isJobSeeker && user.isAdmin) {
            window.location.href = "/r/dashboard"
        }
        
    }, [])

    const [docMenu, setDocMenu] = useState([
        {
            name: "Homepage",
            active: true,
            icon: <HomeRoundedIcon/>,
            activeColor: "text-[#4B45DF]",
            inactiveColor: "text-[#7C8493]",
            border: "border-[#4B45DF]",
            toShoww: <Home/>
        },
        // {
        //     name: "Messages",
        //     active: false,
        //     icon: <CommentOutlinedIcon/>,
        //     activeColor: "text-[#4B45DF]",
        //     inactiveColor: "text-[#7C8493]",
        //     border: "border-[#4B45DF]",
        //     toShoww: <Messages/>
        // },
        {
            name: "My Applications",
            active: false,
            icon: <ArticleOutlinedIcon/>,
            activeColor: "text-[#4B45DF]",
            inactiveColor: "text-[#7C8493]",
            border: "border-[#4B45DF]",
            toShoww: <Applications/>
        },
        {
            name: "Find Jobs",
            active: false,
            icon: <SearchOutlinedIcon/>,
            activeColor: "text-[#4B45DF]",
            inactiveColor: "text-[#7C8493]",
            border: "border-[#4B45DF]",
            toShoww: <Jobs/>
        },
        {
            name: "Browse Companies",
            active: false,
            icon: <BusinessOutlinedIcon/>,
            activeColor: "text-[#4B45DF]",
            inactiveColor: "text-[#7C8493]",
            border: "border-[#4B45DF]",
            toShoww: <Companies/>
        },
        {
            name: "My Profile",
            active: false,
            icon: <PermIdentityOutlinedIcon/>,
            activeColor: "text-[#4B45DF]",
            inactiveColor: "text-[#7C8493]",
            border: "border-[#4B45DF]",
            toShoww: <Profile/>
        }

    ])

    const handleClicked = (e) => {

        let name = e.target.innerText;
        let index = docMenu.findIndex((item) => item.name === name);

        let newDocMenu = docMenu.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    active: true
                }
            }
            else {
                return {
                    ...item,
                    active: false
                }
            }
        })

        setDocMenu(newDocMenu);
    }


    return (
        <div className="flex">
            
            <div className="w-72 left-0 top-0 bg-[#f8f8fd]">
                <div className="w-44 mx-auto mt-2">
                    <img src={logo} alt="" />
                </div>
                <div className="mt-5 flex h-screen flex-col ">

                    {
                        docMenu.map((item, i) => {
                            return (
                                <DocBtn key={i} item={item} handleClicked={handleClicked}/>
                            )
                        })
                    }
                </div>
            </div>

            <div className="w-full">
                {
                    docMenu.map((item, i) => {
                        if (item.active) {
                            return item.toShoww
                        }
                    })
                }
            </div>
        </div>
    )
}

export default SideDoc;
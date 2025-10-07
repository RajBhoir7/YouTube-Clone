import React  from "react";
import { useDispatch } from "react-redux";
import { ToggleMenu } from "../utils/appSlice";

const Head = () =>{
    const dispatch = useDispatch();
    const toggleMenuHanderler= () =>{
    
    dispatch(ToggleMenu())
    }


    return(
    <div className="grid grid-flow-col p-2 m-2 shadow-lg sticky top-0 bg-white">

        <div className="flex col-span-1">
            <img 
            onClick={()=>toggleMenuHanderler()}
            className="h-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXkNCPmtkH_FfKY-fOPP4pNpAFqShbeyM4gg&s" alt="menu" />

            <img 
            className="h-9 mx-6"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" alt="Yt-logo" />
        </div>

        <div className="col-span-10 px-10">
            <input className="w-1/2 border border-gray-400 rounded-l-full p-1" 
            placeholder="Search"
            type="text" name="" id="" />
            <button className="border border-gray-400 rounded-r-full p-1 w-16 bg-gray-100">Search</button>
        </div>

        <div className="col-span-1 flex">
            <img 
            className="h-8"
            src="https://freesvg.org/img/abstract-user-flat-4.png" alt="Profile-icon" />
           
        </div>




    </div>
)
    
}

export default Head;
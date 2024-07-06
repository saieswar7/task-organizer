import React from "react";
import { FiMenu } from "react-icons/fi";
import './MainScreen.css';
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../redux/taskSlice";
import SideBarNavigation from "../BarNavigation/BarNavigation";
import TodayScreen from "../TodayScreen/TodayScreen";
import UpComingScreen from "../UpComingScreen/UpComingScreen";
import StickyWall from "../StickyWall/StickyWall";
import CalendarScreen from "../CalendarScreen/CalendarScreen";
const MainScreen = () => {
    const dispatch = useDispatch()
    const toggleAction = useSelector((state) => state.tasks.activesidebar)
    const activeScreen = useSelector((state) => state.tasks.activeScreen)
    return (
        <div className={toggleAction ? "main-grid" : "without-sidebar"}>
            <div className="side-bar">
                <SideBarNavigation />
            </div>
            <div className="main-container">
                {activeScreen === "Today" ? 
                <TodayScreen /> : 
                activeScreen === "Upcoming" ? 
                <UpComingScreen /> : 
                activeScreen === 'StickyWall' ? 
                <CalendarScreen /> :
                <StickyWall/> 
                }
            </div>
        </div>
    );
}

export default MainScreen
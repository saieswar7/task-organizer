import React from "react";
import './BarNavigation.css';
import { FiMenu,FiSearch ,FiChevronsRight,FiList,FiCalendar,FiLogOut  ,FiFile,FiPlus,FiSettings  } from "react-icons/fi";
import { useDispatch,useSelector } from "react-redux";
import { toggleSideBar,changeScreen } from "../../redux/taskSlice";
const SideBarNavigation=()=>{
    const dispatch = useDispatch()
    const toggleAction = useSelector((state)=>state.tasks.activesidebar)
    const listtypes = useSelector((state)=>state.tasks.lists)
    const tags = useSelector((state)=>state.tasks.tags)
    const activeScreen = useSelector((state)=>state.tasks.activeScreen)
    return(
        <>
        <div className="main-con">
            
          < FiMenu onClick={()=>dispatch(toggleSideBar())} className={!toggleAction?"menuvisible":'menuspan'}/>
            <div className={`sidebar1 ${toggleAction ? 'open' : ''}`}>
                <div>
                <div className="sb-header">
                    <span>Menu</span>
                    <span>
                        <FiMenu className="open-icon" onClick={()=>dispatch(toggleSideBar())}/>
                    </span>
                </div>
                <div className="sb-inp-con">
                    <FiSearch className="search-icon"/>
                    <input className="search-input" placeholder="Search"/>
                </div>
                <div className="sb-tasks">
                    <h5 className="sb-title">Tasks</h5>
                    <div >
                        <div 
                        onClick={()=>dispatch(changeScreen("Upcoming"))}
                        className="sb-sec" style={{backgroundColor:activeScreen==="Upcoming"?'rgb(230, 230, 230)':"",fontWeight:activeScreen==="Upcoming"?'bold':""}}>
                           <span className="sb-sec-con">
                            <FiChevronsRight className="sec-icon" /> 
                            <span>Upcoming</span>
                            </span>
                            <span className="sb-task-num">12</span>
                        </div>
                    </div>
                    <div>
                        <div 
                         style={{backgroundColor:activeScreen==="Today"?'rgb(230, 230, 230)':"",fontWeight:activeScreen==="Today"?'bold':""}}
                        onClick={()=>dispatch(changeScreen("Today"))}
                        className="sb-sec">
                           <span className="sb-sec-con">
                            <FiList  className="sec-icon" /> 
                            <span>Today</span>
                            </span>
                            <span className="sb-task-num">12</span>
                        </div>
                    </div>
                    <div>
                        <div 
                        style={{backgroundColor:activeScreen==="StickyWall"?'rgb(230, 230, 230)':"",fontWeight:activeScreen==="StickyWall"?'bold':""}}
                        onClick={()=>dispatch(changeScreen("StickyWall"))}
                        className="sb-sec">
                           <span className="sb-sec-con">
                            <FiCalendar  className="sec-icon" /> 
                            <span>Calendar</span>
                            </span>
                           
                        </div>
                    </div>
                    <div>
                        <div 
                         style={{backgroundColor:activeScreen==="Calendar"?'rgb(230, 230, 230)':"",
                            fontWeight:activeScreen==="Calendar"?'bold':""
                         }}
                        onClick={()=>dispatch(changeScreen("Calendar"))}
                        className="sb-sec">
                           <span className="sb-sec-con">
                            <FiFile  className="sec-icon" /> 
                            <span>Sticky Wall</span>
                            </span>
                        </div>
                    </div>

                </div>
                <div className="sb-tasks">
                    <h5 className="sb-title">Lists</h5>
                    {listtypes.map((item,index)=>{
                        return(
                            <div className="sb-sec">
                            <span className="sb-sec-con">
                                <span style={{backgroundColor:`${item.color}`}} className="color-con"></span> 
                                <span>{item.name}</span>
                            </span>
                            <span className="sb-task-num">{item.count}</span>
                        </div>
                        )
                    })}
                    <div className="add-list">
                        <FiPlus style={{marginRight:10}}/>
                        Add List
                    </div>
                </div>
                <div>
                    <h5 className="sb-title">Tags</h5>
                    <div  className="sb-tags">
                        {tags.map((item,index)=>{
                            return(
                                <span style={{backgroundColor:`${item.color}`}} className="tag-item">
                                    {item.tagname}
                                </span>
                            )
                        })}
                    
                    </div>
                    <div className="add-list">
                        <FiPlus style={{marginRight:10}}/>
                        Add Tag
                    </div>
                </div>
              
            </div>
            <div className="sb-footer">
                    <div className="foot-con">
                        <FiSettings className="setting-icon"/>
                        <span>Settings</span>
                    </div>
                    <div  className="foot-con">
                        <FiLogOut className="setting-icon"/>
                        <span>Sign Out</span>
                    </div>
            </div>
            </div>
            
        </div>
        </>
    )
}

export default SideBarNavigation
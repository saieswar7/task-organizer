import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks :[],
    activesidebar:false,
    activeScreen:'Today',
    lists:[
        {
            "name":'Personal',
            "color":'red',
            "count":3
        },
        {
            "name":'List1',
            "color":'orange',
            "count":3
        },
        {
            "name":'Work',
            "color":'green',
            "count":3
        }
    ],
    tags:[
        {
            "tagname":'Tag1',
            "color":'lightgray'
        },
        {
            "tagname":'Tag2',
            "color":'lightblue'
        },
        {
            "tagname":'Tag3',
            "color":'lightgreen'
        }
    ],
}
const taskSlice = createSlice({
    name:'taskSlice',
    initialState :initialState,
    reducers:{
        toggleSideBar:(state)=>{
            state.activesidebar = !state.activesidebar
        },
        changeScreen:(state,action)=>{
            state.activeScreen = action.payload
        }
    }
})

export const {toggleSideBar,changeScreen} = taskSlice.actions
export default taskSlice.reducer
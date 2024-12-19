import { createSlice } from "@reduxjs/toolkit";
import aparts from "./aparts";
import { act } from "react";
const initialState = {
enrtyDate:false,
exitDate:false,   
yearindex:"",
leaveYearIndex:"",
day:"gg",
month:"aa",
year:"yyyy",
leaveday:"gg",
leaveMonth:"aa",
leaveyear:"yyyy",
selectedHotel:[],
detailspage:[],

}


export const homeSlice = createSlice({
name:"homes",
initialState,
reducers:{
    changeDate:(state,action)=>{
state.enrtyDate = !state.enrtyDate
homeSlice.caseReducers.applyFilters(state)
},sendDay:(state,action)=>{
const newDay =Number(action.payload)
state.day = newDay
homeSlice.caseReducers.applyFilters(state)
},sendMonths:(state,action)=>{
const newMonth = Number(action.payload)
state.month = newMonth
homeSlice.caseReducers.applyFilters(state)
},sendYears:(state,action)=>{
const {years,index} =action.payload
const newYears =years
state.year = newYears
state.yearindex=index
homeSlice.caseReducers.applyFilters(state)
},leavechangeDate:(state,action)=>{
state.exitDate=!state.exitDate
homeSlice.caseReducers.applyFilters(state)
},leavesendDay:(state,action)=>{
 const newDay =Number(action.payload)
 state.leaveday = newDay
 homeSlice.caseReducers.applyFilters(state)   
},leavesendMonths:(state,action)=>{
const newMont = Number(action.payload)
state.leaveMonth = newMont
homeSlice.caseReducers.applyFilters(state)
},leavesendYears:(state,action)=>{
const {years,index} =action.payload    
const newYears =years
state.leaveYearIndex=index
state.leaveyear = newYears
homeSlice.caseReducers.applyFilters(state)
}, applyFilters: (state) => {
    const startDate = new Date(state.year, state.month - 1, state.day);
    const endDate = new Date(state.leaveyear, state.leaveMonth - 1, state.leaveday);

    state.selectedHotel = aparts.filter((build) => {
        const buildDate = new Date(build.year, build.month - 1, build.day);
        return buildDate >= startDate && buildDate <= endDate;
    });
},details:(state,action)=>{
state.detailspage = aparts.filter((builds)=>builds.id ===  action.payload)
console.log(state.detailspage)
}





}



})



export const {changeDate,sendDay,sendMonths,sendYears,leavechangeDate,leavesendDay,leavesendMonths,leavesendYears,details}= homeSlice.actions
export default homeSlice.reducer
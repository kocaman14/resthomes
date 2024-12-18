import { configureStore } from "@reduxjs/toolkit";
import  homeReducer from "./features/home";

export const store = configureStore({
reducer:{
home:homeReducer

}


})
import { configureStore } from "@reduxjs/toolkit";


import DoctorApi from "../slice/DoctorSlice";


const Store = configureStore({
    reducer: {
        [DoctorApi.reducerPath]:DoctorApi.reducer,
    },
    middleware:(getDefaultMiddleWare)=>
        getDefaultMiddleWare({
            serializableCheck:false,
        }).concat(
            DoctorApi.middleware,
        )
})
export default Store
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const DoctorApi = createApi({
    reducerPath:'doctorApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000'}),
    endpoints:(builder)=>({
        getDoctor:builder.query({
            query:()=>'/sign/doctors'
        }),
    })
})
export const {useGetDoctorQuery} = DoctorApi;
export default DoctorApi;
import React from 'react'
import { useGetDoctorQuery } from '../redux/slice/DoctorSlice'

function Doctors() {
  const {data,isFetching,error}= useGetDoctorQuery()
  console.log(data)
  return (
    <div>Doctors</div>
  )
}

export default Doctors
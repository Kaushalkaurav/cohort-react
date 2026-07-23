import React from 'react'
import CreateuserForm from '../component/CreatuserForm'
import UserCard from '../component/UserCard'
import { Route, Routes } from 'react-router'
const MyRouts = () => {
  return (
    <div>
      <Routes>
        <Route path = "/CreatuserForm" element={<CreateuserForm/>}></Route>
        <Route path = "/UserCard" element={<UserCard/>}></Route>
      </Routes>
    </div>
  )
}

export default MyRouts

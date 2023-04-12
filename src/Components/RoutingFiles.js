import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import Error from './Error'
import ContextData from './ContextAPI'
import AddStudent from './AddStudent'
import UpdateStudent from './UpdateStudent'

const RoutingFiles = () => {
  const [data, setData]=useState([
    {name:'John',age:'23',course:'MERN', batch:"December"},
    {name:'Roy',age:'24',course:'MERN', batch:"December"},
    {name:'Elizabeth', age:'27',course:'MERN', batch:"January"},
    {name:'Ananya', age:'25',course:'MERN', batch:"January"},
    {name:'Shreyansh', age:'29',course:'MERN', batch:"February"},
    {name:'Zoya', age:'24',course:'MERN', batch:"February"},
    
  ])
  return (
    <>
    <div>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/student" element={
            <ContextData.Provider value={{entries:data, updateData:setData}}>
               <Student listData={data} setListData={setData}/>
            </ContextData.Provider>
          }/>
          <Route path="/contact" element={
            <ContextData.Provider value={{entries:data, updateData:setData}}>
               <Contact/>
            </ContextData.Provider>     
        }/>
          <Route path="/newstudent" element={
            <ContextData.Provider value={{entries:data, updateData:setData}}>
               <AddStudent/>
            </ContextData.Provider>     
        }/>
        <Route path="/updatestudent" element={
            <ContextData.Provider value={{entries:data, updateData:setData}}>
               <UpdateStudent/>
            </ContextData.Provider>     
        }/>
          <Route path="/*" element={<Error/>}/>
       </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default RoutingFiles
import React, { useContext } from 'react'
import ContextData from './ContextAPI'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'


const AddStudent = () => {
  const data= useContext(ContextData)
  const navigate = useNavigate();
  const newStudent = {
    name: '',
    age:'',
    course: '',
    batch: ''
  }

  const handleChange = (e) => {
    newStudent[e.target.name] = e.target.value
  }

  const handleSubmit = () =>{
     data.entries.push(newStudent);
     navigate('/student')
     console.log(data);
  }
  
   return (
    <>
   <Nav/>   
        <div className="flex1">
        <fieldset>
           <legend>Name </legend>
               <input placeholder='Enter Name' name='name' onChange={handleChange} />
        </fieldset>

        <fieldset>
           <legend>Age </legend>
          <input placeholder='Enter Age' name='age' onChange={handleChange} />    
        </fieldset>
        
        <fieldset>
           <legend>Course </legend>
          <input placeholder='Enter Course' name='course' onChange={handleChange} />
        </fieldset>

        <fieldset>
           <legend>Batch </legend>
          <input placeholder='Enter Batch' name='batch' onChange={handleChange} />
        </fieldset>
        </div>

        <div className='flex2'>
         <div> <button className='btn1'>Cancel</button></div>
         <div> <button className='btn1' onClick={handleSubmit}>Submit</button></div>
        </div>
    </>
  )
}

export default AddStudent

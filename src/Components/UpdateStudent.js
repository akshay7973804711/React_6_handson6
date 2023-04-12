import React, { useContext } from 'react';
import {useLocation, useNavigate } from 'react-router-dom';
import ContextData from './ContextAPI';
import Nav from './Nav';

function UpdateStudent() {
  const dataContext = useContext(ContextData);
  const index = useLocation().state.data;
  const navigate = useNavigate();
  console.log(index);
  console.log(dataContext);

  const updateData = {
    name: dataContext.entries[index].name,
    age: dataContext.entries[index].age,
    course: dataContext.entries[index].course,
    batch: dataContext.entries[index].batch
  };

  const handleChange = (e) => {
    updateData[e.target.name] = e.target.value
  }

  const handleSubmit = () => {
    dataContext.entries[index] = updateData;
   // navigate(-1)
    navigate('/student')
    console.log(dataContext);
  }

  return (
    <>    
       <Nav/>   
        <div className="flex1">
        <fieldset>
           <legend>Name </legend>
               <input placeholder={dataContext.entries[index].name} name='name' onChange={handleChange} />
        </fieldset>

        <fieldset>
           <legend>Age </legend>
          <input placeholder={dataContext.entries[index].age} name='age' onChange={handleChange} />    
        </fieldset>
        
        <fieldset>
           <legend>Course </legend>
          <input placeholder={dataContext.entries[index].course} name='course' onChange={handleChange} />
        </fieldset>

        <fieldset>
           <legend>Batch </legend>
          <input placeholder={dataContext.entries[index].batch} name='batch' onChange={handleChange} />
        </fieldset>
        </div>

        <div className='flex2'>
         <div> <button className='btn1'>Cancel</button></div>
         <div> <button className='btn1' onClick={handleSubmit}>Update</button></div>
        </div>
    </>
  )
}

export default UpdateStudent;

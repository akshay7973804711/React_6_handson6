import React, { useContext} from 'react'
import Nav from './Nav'
import { Link, useNavigate } from 'react-router-dom'
import ContextData from './ContextAPI'

const Student = ({ listData, setListData }) => {
  const dataContext = useContext(ContextData);
  console.log(dataContext);
  const navigate = useNavigate();

  const newStudent=()=>{
    navigate('/newstudent')
  }

  const handleRemoveItem = (index) => {
    // Create a copy of the current list data
    const updatedListData = [...listData];
    // Remove the item at the specified index
    updatedListData.splice(index, 1);
    // Update the state with the updated list data
    setListData(updatedListData);
  }
  

  return (
    <>
      <Nav />
      <div className='box1'>
        <h1 className='heading'>Students Details</h1>
        <button onClick={newStudent} className='btn1'>Add New Student</button>
      </div>
      <table border='1px' className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {dataContext.entries.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.batch}</td>
                <td><Link to="/updatestudent" state={{data:index}} >Edit</Link> </td>
                <td><button onClick={() => handleRemoveItem(index)}>Remove</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );  
}

export default Student

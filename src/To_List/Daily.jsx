import React,{useState} from 'react'
import *as Icons from 'react-icons/fa'
import {Link} from 'react-router-dom';
import './Daily.css';
const Daily = () => {
    
        // TO TAKE INPUT FORM THE USER AND CLEAR THE SEARCH PART
        const [Input, UpdateInput] = useState('');
      
        // TO ADD TO LIST AREA
        const [Data, AddData] = useState([]); // USING ARRAY BECAUSE OF MULTIPLE INPUT / TASK TO STORE THEM  
      
        // FUNCTION TO ADD THE LIST
        const Add_Data = () => {
          if (Input.trim() !== '') {
            AddData([...Data, Input]); // USING REST OPERATOR
            UpdateInput(''); // MAKING THE SEARCH BAR EMPTY AFTER ADDING THE LIST
          }
        };
      
        // FUNCTION FOR REMOVING THE DONE TASK
        const Remove_List = (index) => {
          AddData(Data.filter((_, i) => i !== index));
        };
      
  return (
    <>
        <Link className="button" to="/">Back - Home</Link>
<h1>Sports - Time</h1>

          <div className="Main_div">
      <h1>To-Do List</h1>
      <div className='Full_container'>
        <input 
          id='input_section' 
          type='text' 
          value={Input} 
          onChange={(e) => UpdateInput(e.target.value)} 
          placeholder='Enter Your Task To Be Done' 
        />
        <button id="button_add" onClick={Add_Data}><Icons.FaPlus /></button>
      </div>
      <div id='data_display'>
        <ul>
          {Data.map((val, index) => (
            <li key={index} className='todo_item'>
              {val}
              <button className="delete_class" onClick={() => Remove_List(index)}><Icons.FaWindowClose /></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

  

export default Daily

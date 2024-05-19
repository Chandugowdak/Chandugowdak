import React, { useState } from 'react';
import './Morning_Workout.css';
import * as Icons from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MorningWorkout = () => {
  // State to manage the input value from the user
  const [input, setInput] = useState('');

  // State to manage the list of tasks
  const [data, setData] = useState([]);

  // Function to add a new task to the list
  const addData = () => {
    if (input.trim() !== '') {
      setData([...data, input]);
      setInput(''); // Clear the input field after adding the task
    }
  };

  // Function to remove a task from the list
  const removeList = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* Navigation Bar */}
      <ul className='Nav_bar'>
        <Link className="item_name" to="/">MORNING WORKOUT</Link>
        <Link className="item_name" to="/study">STUDY</Link>
        <Link className="item_name" to="/daily" >DAILY MEETING</Link>
        <Link className="item_name" to="/sports">SPORTS</Link>
      </ul> 
      
      <h1 id='head'>Morning - Workout</h1>

      <div className="Main_div">
        <h1>To-Do List</h1>
        <div className='Full_container'>
          {/* Input section for adding tasks */}
          <input 
            id='input_section' 
            type='text' 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder='Enter Your Task To Be Done' 
          />
          <button id="button_add" onClick={addData}><Icons.FaPlus /></button>
        </div>

        <div id='data_display'>
          <ul>
            {/* Displaying the list of tasks */}
            {data.map((val, index) => (
              <li key={index} className='todo_item'>
                {val}
                <button className="delete_class" onClick={() => removeList(index)}><Icons.FaWindowClose /></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MorningWorkout;

import React, { useState } from 'react'

const Agecalc = () => {
    const [age,setAge] = useState("null");
    const [dob,setDob] = useState("");
    
    const calculate = () => {
        if(!dob) {
            alert("Please select a DOB");
            return;
        }
        const myDob = new Date(dob);
        const todayDob = new Date();
        let calculatedAge = todayDob.getFullYear() - myDob.getFullYear();
        const monthDifference = todayDob.getMonth() - myDob.getMonth();
        
        if(monthDifference < 0 || (monthDifference === 0 && todayDob.getDate() < myDob.getDate())) {
            calculatedAge--;
        }
        setAge(calculatedAge);
    };

  return (
    <div className='container'>
        <h1 className='h1'>Age Calculator</h1>
        <div className='form-group'>
            <label htmlFor='dob'>Date Of Birth : </label>
            <input type='date' placeholder='Enter DOB' id='dob' onChange={(e) => setDob(e.target.value)} value={dob} required />
        </div>
        <button className="btn" onClick={calculate}>Calculate Age</button>
        {age != null && (<div className='result'><strong>your Age is :{age} Years</strong></div>)}
      
    </div>
  );
}

export default Agecalc;

import React, { useState } from 'react';
import './AgeCalculator.css';

const AgeCalculator = () => {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState(null);

  const handleDateChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const calculateAge = () => {
    if (dateOfBirth) {
      const today = new Date();
      const birthDate = new Date(dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      setAge(age);
    }
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <input 
        type="date" 
        value={dateOfBirth} 
        onChange={handleDateChange} 
        placeholder="Enter your date of birth" 
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && (
        <div>
          <h2>Your Age: {age} years</h2>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;

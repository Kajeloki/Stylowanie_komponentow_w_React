import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
const [isValid, setIsValid]=useState(true);
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0)
    {
      setIsValid(false);
      return;
    } else{setIsValid(true)}
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color:!isValid ? "red":"black"}}>Course Goal</label>
        <input type="text" style={{backgroundColor: !isValid ? "#ffabab":"#fad0ec", border: !isValid ? '1px solid red': '1px solid #ccc'}} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goals</Button>
    </form>
  );
};

export default CourseInput;

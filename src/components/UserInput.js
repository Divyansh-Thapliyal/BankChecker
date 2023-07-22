
import {useState} from 'react';


const initialUserInput={
    currentSavings:10000,
    yearlyContribution:1200,
    expectedReturn:7,
    duration:10
};

const UserInput=(props)=>
{
    const [userInput,setUserInput]=useState(initialUserInput);

    const submitHandler=(event)=>
    {
      event.preventDefault();
      props.onCalculate(userInput);
    }

    const resetHandler=()=>
    {
       setUserInput(initialUserInput);
    }

    const inputChangeHandler=(input,value)=> // generic function for all inputs.
    {
         setUserInput((prevInput)=>{
            return{
                ...prevInput,
                [input]:value
            }
         });
    }

   return <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number"  onChange={(event)=>{inputChangeHandler("currentSavings",event.target.value)}} value={userInput.currentSavings}  id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" onChange={(event)=>{inputChangeHandler("yearlyContribution",event.target.value)}} value={userInput.yearlyContribution} id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" onChange={(event)=>{inputChangeHandler("expectedReturn",event.target.value)}} value={userInput.expectedReturn} id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" onChange={(event)=>{inputChangeHandler("duration",event.target.value)}} value={userInput.duration} id="duration" />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button"> 
            Calculate
          </button>
        </p>
      </form>

}

export default UserInput;
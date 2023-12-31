import { useState } from "react";
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(InputId, newValue) {
  setUserInput((prevUserInput) => {
    return {
      ...prevUserInput,
      [InputId]: +newValue,
    };
  });
}


  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputIsValid && <p className="center">Please enter a valid data.</p>}
    <div className="table-wrap">
    { inputIsValid && <Results input={userInput}/>}
    </div>
    </>
  )
}

export default App;

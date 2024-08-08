import './EquationInputForm.css';
import { callEquationApi } from '../../api/EquationCall'
import { useState } from 'react';

function EquationInputForm() {
  const [equation, setEquation] = useState();

  async function sendCalculationData(equation) {
    console.log(equation)
    const result = await callEquationApi(equation)
    console.log(result)
  }
  return (
    <>
      <form>
        <input
          name="equation"
          placeholder="Type equation here"
          onChange={e=>setEquation(e.target.value)}
        />
        <button name="submitButton" type="submit" onClick={() => sendCalculationData({equation})}>
          Submit
        </button>
      </form>
    </>
  );
}

export default EquationInputForm; 
import './EquationInputForm.css';
import { callEquationApi } from '../../api/EquationCall'
import { useState } from 'react';

function EquationInputForm() {
  const [equation, setEquation] = useState();
  const [result, setResult] = useState();

  async function sendCalculationData(equation) {
    const result = await callEquationApi(equation)
    setResult(result)
  }
  return (
    <>
      <div>{result}</div>
      <div>
        <input
          name="equation"
          placeholder="Type equation here"
          onChange={e=>setEquation(e.target.value)}
        />
        <button name="submitButton" type="submit" onClick={() => sendCalculationData({equation})}>
          Submit
        </button>
      </div>
    </>
  );
}

export default EquationInputForm; 
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

const Click = (value) => {
    setInput(input + value);
  };

  const clickClear = () => {
    setInput('');
    setResult('');
  };


    const clickequal = () => {
    try {
      const calculatedResult = eval(input);
      setInput(calculatedResult.toString());
      setResult(calculatedResult.toString());
    } 
    catch (error) {
      setResult('Error');
    }
  };

 
   return (
    <div className='calculator-container'>
    <div className="calculator container">
      <h1>Calculator</h1>
      <input type="text" value={input} readOnly className="form-control mb-3"></input>
      <div className="buttons">
        <button onClick={() => Click('1')} className="btn btn-secondary mr-1">1</button>
        <button onClick={() => Click('2')} className="btn btn-secondary mr-1">2</button>
        <button onClick={() => Click('3')} className="btn btn-secondary mr-1">3</button>
        <button onClick={() => Click('4')} className="btn btn-secondary mr-1">4</button>
        <button onClick={() => Click('5')} className="btn btn-secondary mr-1">5</button>
        <button onClick={() => Click('6')} className="btn btn-secondary mr-1">6</button>
        <button onClick={() => Click('7')} className="btn btn-secondary mr-1">7</button>
        <button onClick={() => Click('8')} className="btn btn-secondary mr-1">8</button>
        <button onClick={() => Click('9')} className="btn btn-secondary mr-1">9</button>
        <button onClick={() => Click('0')} className="btn btn-secondary mr-1">0</button>
        <button onClick={() => Click('.')} className="btn btn-secondary mr-1">.</button>
        <button onClick={() => Click('+')} className='btn btn-primary mx-1'>+</button>
        <button onClick={() => Click('-')} className='btn btn-primary mx-1'>-</button>
        <button onClick={() => Click('*')} className='btn btn-primary mx-1'>*</button>
        <button onClick={() => Click('/')} className='btn btn-primary mx-1'>/</button>

        <button onClick={() => clickClear()} className='btn btn-danger mx-1 clear'>Clear</button>
        <button onClick={() => clickequal()} className="btn btn-success mx-1 equals">=</button>
      </div>
    </div>
    </div>
  );
};

export default Calculator;

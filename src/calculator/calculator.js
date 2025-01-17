

const CalculatorWithJestTestCases = () => {

  

  return (
    <>
      <div className="calc">
        <div className="display" data-testid="result">{"0"}</div>
        <div className="buttons"> 
          <button data-testid="7" >7</button>
          <button data-testid="8" >8</button>
          <button data-testid="9" >9</button>
          <button data-testid="-" >-</button>
          <button data-testid="4" >4</button>
          <button data-testid="5" >5</button>
          <button data-testid="6" >6</button>
          <button data-testid="*" >*</button>
          <button data-testid="1" >1</button>
          <button data-testid="2" >2</button>
          <button data-testid="3" >3</button>
          <button data-testid="/" >/</button>
          <button data-testid="0" >0</button>
          <button data-testid="." >.</button>
          <button data-testid="C" >C</button>
          <button data-testid="+" >+</button>
          <button data-testid="=" >=</button>
        </div>
      </div>
    </>
  );
};

export default CalculatorWithJestTestCases;

import "../Step.css";
const Step = ({ stepValue, setStepValue }) => {
  const handleInputChange = (e) => {
    setStepValue(parseInt(e.target.value));
    console.log(stepValue);
  };

  return (
    <div className="main">
      <label className="title" htmlFor="">
        Step:
      </label>
      <input type="number" value={stepValue} onChange={handleInputChange} />
    </div>
  );
};

export default Step;

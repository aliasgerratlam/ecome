import { useState } from 'react';

const QuantityButton = ({ stock }) => {
  const [value, setValue] = useState(0);

  const handleIncrement = (e) => {
    e.preventDefault();
    setValue((prev) => prev + 1);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    if (value > 1) setValue((prev) => prev - 1);
  };

  return (
    <div className="quantity-btn d-flex align-items-center me-3">
      <button className="btn" onClick={handleDecrement}>
        -
      </button>
      <span>{value}</span>
      <button className="btn" onClick={handleIncrement}>
        +
      </button>
      {value > stock && <p>Product quantity is great than stock</p>}
    </div>
  );
};

export default QuantityButton;

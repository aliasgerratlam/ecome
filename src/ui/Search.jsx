import { useRef, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleShow = (e) => {
    e.preventDefault();
    setShow((prev) => !prev);
  };

  const handleSearchOrder = (e) => {
    e.preventDefault();
    navigate(`/checkout/${inputRef.current.value}`);
    setShow((prev) => !prev);
  };

  return (
    <div className="search-wrapper position-relative">
      <button className="nav-link" onClick={handleShow}>
        <RiSearchLine />
      </button>

      {show && (
        <div className="search">
          <input
            type="text"
            placeholder="# Search by order ID..."
            ref={inputRef}
            onChange={() => {
              if (inputRef.current) inputRef.current.value;
            }}
          />
          <button onClick={handleSearchOrder}>
            <RiSearchLine />
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;

import { useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
const handleFocus = () => {
   if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <input type="text" ref={inputRef} /> 
      <button onClick={handleFocus}>Click to focus</button>
    </>
  );
}

export default App;

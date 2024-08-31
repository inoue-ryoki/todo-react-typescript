import React, { ChangeEvent, useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }
  return (
    <div className="App">
      <input value={text} onChange={onChangeInput} />
      <p>{text}</p>

    </div>
  );
}


export default App;

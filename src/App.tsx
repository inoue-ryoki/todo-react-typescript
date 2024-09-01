import React, { ChangeEvent, useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <input
        className="mb-4 p-2 border border-gray-300 rounded"
        value={text}
        onChange={onChangeInput}
        placeholder="Type something..."
      />
      <p className="text-lg text-gray-700">{text}</p>
    </div>
  );
}


export default App;

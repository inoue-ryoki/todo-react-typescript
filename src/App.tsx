import React, { ChangeEvent, useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onAddButtonClick = () => {
    setDisplayText(prevText => prevText + (prevText ? "\n" : "") + text);
    setText("");
  }

  const onClearButtonClick = () => {
    setDisplayText("");
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <input
        className="mb-4 p-2 border border-gray-300 rounded"
        value={text}
        onChange={onChangeInput}
        placeholder="Type something..."
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onAddButtonClick}>追加</button>
      <br />
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={onClearButtonClick}>クリア</button>
      <pre className="text-lg text-gray-700 whitespace-pre-wrap">{displayText}</pre>
    </div>
  );
}


export default App;

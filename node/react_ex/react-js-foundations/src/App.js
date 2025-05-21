import React, { useState, useEffect } from 'react';
import './App.css';
import RegexBuilder from './RegexBuilder';

function App() {
  // const [personName,setPersonName] = React.useState('');
  const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

return (
  <>
{/* <div className="App">
<h1>Hello {personName}</h1>
<input type="text" onChange={(e) => setPersonName(e.target.value)}/>
</div> */}


<RegexBuilder />
</>
);
}
export default App;
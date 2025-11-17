import { useState ,useEffect } from 'react'
import GoogleForm from './GoogleForm'
// import './App.css'
function App() {
  
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   fetch('http://localhost:5000/api/message')
  //     .then(res => res.json())
  //     .then(data => setMessage(data.message));
  // }, []);

  // return (
  //   <div style={{ textAlign: "center", marginTop: "100px" }}>
  //     <h1>{message || "Load hor rha bsdk..."}</h1>
  //   </div>
  return(
  <div>
    <GoogleForm/>
  </div>
  );
}

export default App

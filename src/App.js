import './App.css';
import axios from "axios";
axios.defaults.withCredentials = true;


function App() {
  const URLS = [
    "https://rich-tan-mackerel.cyclic.app",
    "http://localhost:8000"
  ]
  const createCookie = () => {
    axios.get(`${URLS[1]}/s`, { withCredentials: true })
      .then((res) => {
        console.log(res.data)
      })
  }

  const clearCookie = ()=>{
    axios.get(`${URLS[1]}/r`, {withCredentials: true})
    .then((res)=>{
      console.log(res.data)
    })
  }

  const checkCookie = () =>{
    axios.get(`${URLS[1]}/c`, {withCredentials: true})
    .then((res)=>{
      console.log(res.data);
    })
  }
  return (
    <div className="App">
      <button onClick={createCookie}> create cookie</button>
      <button onClick={clearCookie}> delete cookie </button>
      <button onClick={checkCookie}> check cookie</button>
    </div>
  );
}

export default App;

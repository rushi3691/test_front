import './App.css';
import axios from "axios";
axios.defaults.withCredentials = true;


function App() {

  const createCookie = () => {
    axios.get("https://rich-tan-mackerel.cyclic.app/s", { withCredentials: true })
      .then((res) => {
        console.log(res.data)
      })
  }

  const clearCookie = ()=>{
    axios.get("https://rich-tan-mackerel.cyclic.app/r", {withCredentials: true})
    .then((res)=>{
      console.log(res.data)
    })
  }

  const checkCookie = () =>{
    axios.get("https://rich-tan-mackerel.cyclic.app/c", {withCredentials: true})
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

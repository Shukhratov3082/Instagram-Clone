import { Route, Routes } from "react-router-dom";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Home from "./containers/Home";


function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>

  );
}

export default App;


import { Route, Routes } from "react-router-dom";
import Login from "./containers/Login";
import Posts from "./containers/Posts";
import Signup from "./containers/Signup";


function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Posts/>}/>
    </Routes>

  );
}

export default App;


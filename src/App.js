import { Route, Routes, } from "react-router-dom";
import Login from "./containers/Login";
import Join from "./containers/Join";
import Home from "./containers/Home";
import Search from "./containers/Search";
import Like from "./containers/Like";
import Signup from "./containers/SignUp.jsx";
import Createpost from "./containers/CreatePost";
// import { useEffect } from "react";


function App() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate('/home')
  // }, [navigate]);
  return (
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/like" element={<Like />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create" element={<Createpost />} />
    </Routes>

  );
}

export default App;


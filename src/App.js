import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Home from "./containers/Home";
import Search from "./containers/Search";
import Like from "./containers/Like";
import { useEffect } from "react";


function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home')
  }, [navigate]);
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/like" element={<Like />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>

  );
}

export default App;


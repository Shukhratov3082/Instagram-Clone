import { Route, Routes, } from "react-router-dom";
import Login from "./containers/Login";
import Join from "./containers/Join";
import Home from "./containers/Home";
import Search from "./containers/Search";
import Like from "./containers/Like";
import Signup from "./containers/SignUp";
import Createpost from "./containers/CreatePost";
import Profile from "./containers/Profile";
import EditProfile from "./containers/EditProfile";
import You from "./components/You";
import Following from "./components/Following";
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
      <Route path="/like/" element={<Like />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create" element={<Createpost />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/editprofile" element={<EditProfile />} />
      <Route path='/like/following' element={<Following />} />
      <Route path='/like/you' element={<You />} />
    </Routes>

  );
}

export default App;


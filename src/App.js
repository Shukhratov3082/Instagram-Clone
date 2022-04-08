import { Route, Routes, } from "react-router-dom";
import Login from "./containers/Login";
import Join from "./containers/Join";
import Home from "./containers/Home";
import Search from "./containers/Search";
import Like from "./containers/Like";
import Signup from "./containers/Signup";
import Createpost from "./containers/CreatePost";
import Profile from "./containers/Profile";
import EditProfile from "./containers/EditProfile";
import You from "./components/You";
import Following from "./components/Following";
import Loginredirect from "./components/Loginredirect";
import Privateroute from "./components/Privateroute";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Loginredirect>
          <Join />
        </Loginredirect>
      } />

      <Route path="/login" element={
        <Loginredirect>
          <Login />
        </Loginredirect>
      } />

      <Route path="/signup" element={
        <Loginredirect>
          <Signup />
        </Loginredirect>
      } />

      <Route path="/home" element={
        <Privateroute>
          <Home />
        </Privateroute>
      } />

      <Route path="/search" element={
        <Privateroute>
          <Search />
        </Privateroute>
      } />

      <Route path="/create" element={
        <Privateroute>
          <Createpost />
        </Privateroute>
      } />

      <Route path="/profile" element={
        <Privateroute>
          <Profile />
        </Privateroute>
      } />

      <Route path="/editprofile" element={
        <Privateroute>
          <EditProfile />
        </Privateroute>
      } />

      <Route path="/like/*" element={
        <Privateroute>
          <Like />
        </Privateroute>
      } />

      <Route path='/like/following' element={
        <Privateroute>
          <Following />
        </Privateroute>
      } />

      <Route path='/like/you' element={
        <Privateroute>
          <You />
        </Privateroute>
      } />
    </Routes>

  );
}

export default App;


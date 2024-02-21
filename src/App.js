import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import You from "./components/You";
import Profile from "./components/Profile";
import Following from "./components/Following";
import Login from "./containers/Login";
import Join from "./containers/Join";
import Like from "./containers/Like";
import Signup from "./containers/Signup";
import Auth from "./containers/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Join />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route
        path="/home"
        element={
          <Auth>
            <Home />
          </Auth>
        }
      />

      <Route path="/search" element={<Search />} />

      <Route
        path="/profile"
        element={
          <Auth>
            <Profile />
          </Auth>
        }
      />

      <Route
        path="/like/*"
        element={
          <Auth>
            <Like />
          </Auth>
        }
      />

      <Route
        path="/like/following"
        element={
          <Auth>
            <Following />
          </Auth>
        }
      />

      <Route
        path="/like/you"
        element={
          <Auth>
            <You />
          </Auth>
        }
      />
    </Routes>
  );
}

export default App;

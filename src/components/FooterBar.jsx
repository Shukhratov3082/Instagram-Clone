import styled from "styled-components";
import Home from "../assets/images/footer/home.svg";
import HomeActive from "../assets/images/footer/home-active.svg";
import Like from "../assets/Like.svg";
import Profile from "../assets/Profile.png";
import Search from "../assets/images/footer/search.svg";
import Video from "../assets/images/footer/video.svg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const FooterBar = () => {
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
    const currentHref = window.location.pathname;
    setIsHome(currentHref === "/home");
  }, []);

  const Images = [
    { to: "/home", img: Home, event: isHome },
    { to: "/search", img: Search },
    { to: "/home", img: Video },
    { to: "/like", img: Like },
    { to: "/profile", img: Profile },
  ];

  return (
    <Wrapper>
      {Images.map(({ to, img, event }) => (
        <div key={Math.random()}>
          <NavLink to={to}>
            <img
              className="search-active"
              src={event ? HomeActive : img}
              alt=""
              loading="lazy"
            />
          </NavLink>
        </div>
      ))}
    </Wrapper>
  );
};

export default FooterBar;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0px;
  position: relative;
  border-top: 0.5px solid #cfcfcfbb;
  background-color: #fff;
  z-index: 10;
  div {
    width: 100%;
    padding: 0 20px;
    text-align: center;
  }
`;

import React from "react";
import styled from "styled-components";
import icon from "../assets/menubar-icons/Icon.svg";
import icon1 from "../assets/menubar-icons/Icon (1).svg";
import icon2 from "../assets/menubar-icons/Icon (2).svg";
import icon3 from "../assets/menubar-icons/Icon (3).svg";
import icon4 from "../assets/menubar-icons/Icon (4).svg";
import icon5 from "../assets/menubar-icons/Icon (5).svg";
import icon6 from "../assets/menubar-icons/Icon (6).svg";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const MenuBurger = ({ open }) => {
  const navigate = useNavigate();

  function userSignOut() {
    signOut(auth).then(() => navigate("/login"));
    navigate("/login");
  }
  return (
    <Ul open={open}>
      <div className="navigate">
        <div className="title">s.khasanov_</div>
        <div className="nav">
          <li>
            <div className="icon">
              <img src={icon} alt="" />
            </div>
            <div className="text">
              <span className="menu-text">Archive</span>
            </div>
          </li>
          <li>
            <div className="icon">
              <img src={icon1} alt="" />
            </div>
            <div className="text">
              <span className="menu-text">Your Activity</span>
            </div>
          </li>
          <li>
            <div className="icon">
              <img src={icon2} alt="" />
            </div>
            <div className="text">
              <span className="menu-text">Nametag</span>
            </div>
          </li>
          <li>
            <div className="icon">
              <img src={icon3} alt="" />
            </div>
            <div className="text">
              <span className="menu-text">Saved</span>
            </div>
          </li>
          <li>
            <div className="icon">
              <img src={icon4} alt="" />
            </div>
            <div className="text">
              <span className="menu-text">Close Friends</span>
            </div>
          </li>
          <li>
            <div className="icon">
              <img src={icon5} alt="" />
            </div>
            <div className="text">
              <span className="menu-text">Discover People</span>
            </div>
          </li>
          <li>
            <div className="icon">
              <img src={icon6} alt="" />
            </div>
            <div className="text">
              <span className="menu-text">Open Facebook</span>
            </div>
          </li>
          <button className="signout" onClick={userSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </Ul>
  );
};

export default MenuBurger;

const Ul = styled.ul`
  width: 250px;
  height: 100%;
  display: block;
  padding: 20px 15px;
  position: absolute;
  top: 0;
  right: 0;
  transform: ${({ open }) => (!open ? "translateX(100%)" : "translateX(0)")};
  transition: all ease 0.3s;
  border-radius: 18px;
  background-color: #f5f5f5;
  border-left: 2px solid gray;
  user-select: none;
  z-index: 50;
  .title {
    font-size: 15px;
  }

  .nav {
    margin-top: 12px;

    li {
      width: 100%;
      height: 48px;
      list-style: none;
      padding: 12px 0;
      display: flex;
      gap: 12px;
      cursor: pointer;

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .text {
        display: flex;
        align-items: center;

        span {
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 20px;
          letter-spacing: -0.25px;
          color: #262626;
        }
      }
    }

    .signout {
      position: absolute;
      background-color: white;
      padding: 8px 12px;
      border-radius: 20px;
      bottom: 20px;
      left: 15px;
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      transition: all .3s ease;
      &:hover {
        background-color: #d6d6d6ba;
      }
    }
  }
`;

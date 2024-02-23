import React from "react";
import styled from "styled-components";
import Burger from "../containers/Burger";
import Strelka from "../assets/Strelka.svg";
import Lock from "../assets/lock.svg";
import Avatar from "../assets/avatar1.png";
import New from "../assets/new.svg";
import Friends from "../assets/friends.png";
import Sport from "../assets/sport.png";
import Design from "../assets/design.png";
import VideoIcon from "../assets/VideoIcon.svg";
import image1 from "../assets/design.png";
import Kontakt from "../assets/Kontakt.svg";
import FooterBar from "./FooterBar";
const Profile = () => {
  return (
    <Wrapper id="wrapper">
      <div className="container">
        <header>
          <div className="header__title">
            <img src={Lock} alt="" />
            <p>jacob_w</p>
            <img src={Strelka} alt="" />
          </div>
          <Burger />
        </header>

        <div className="user__content">
          <div className="user__profile">
            <img src={Avatar} alt="" />
            <div className="profile-activity posts">
              <p>54</p>
              <span>Posts</span>
            </div>
            <div className="profile-activity subscribe">
              <p>834</p>
              <span>Subscribe</span>
            </div>
            <div className="profile-activity followers">
              <p>162</p>
              <span>Followers</span>
            </div>
          </div>
          <div className="user__info">
            <p>Jacob West</p>
            <span>
              Digital goodies designer @pixsellz <br />
              Everything is designed.
            </span>
          </div>
          <button className="edit-profile">Edit Profile</button>
          <div className="users">
            <div>
              <div className="users__user new-user">
                <img src={New} alt="" />
              </div>
              <span>New</span>
            </div>
            <div>
              <div className="users__user">
                <img src={Friends} alt="" />
              </div>
              <span>Friends</span>
            </div>
            <div>
              <div className="users__user">
                <img src={Sport} alt="" />
              </div>
              <span>Sport</span>
            </div>
            <div>
              <div className="users__user">
                <img src={Design} alt="" />
              </div>
              <span>Design</span>
            </div>
          </div>
        </div>
        <div className="user__videos">
          <header className="video__controller">
            <div>
              <img src={VideoIcon} alt="" />
            </div>
            <div>
              <img src={Kontakt} alt="" />
            </div>
          </header>
          <div className="videos">
            <img
              width="124px"
              src="https://th.bing.com/th/id/OIP.Ur17DA1NNSS1TrGD1KPDKwHaHa?rs=1&pid=ImgDetMain"
              alt=""
            />
            <img
              width="124px"
              src="https://wallpaperaccess.com/full/4723250.jpg"
              alt=""
            />
            <img
              width="124px"
              src="https://th.bing.com/th/id/OIP.Ur17DA1NNSS1TrGD1KPDKwHaHa?rs=1&pid=ImgDetMain"
              alt=""
            />
            <img
              width="124px"
              src="https://th.bing.com/th/id/OIP.Ur17DA1NNSS1TrGD1KPDKwHaHa?rs=1&pid=ImgDetMain"
              alt=""
            />
            <img
              width="124px"
              src="https://th.bing.com/th/id/OIP.Ur17DA1NNSS1TrGD1KPDKwHaHa?rs=1&pid=ImgDetMain"
              alt=""
            />
            <img
              width="124px"
              src="https://wallpaperaccess.com/full/4723250.jpg"
              alt=""
            />
            <img
              width="124px"
              src="https://wallpaperaccess.com/full/4723250.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <FooterBar />
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  position: relative;
  .container {
    height: calc(100% - 50px);
    header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 25px;
      .header__title {
        display: flex;
        font-size: 16px;
        gap: 9px;
      }
    }
    .user__content {
      padding: 0 16px 8px;
      border-bottom: 1px solid whitesmoke;
      .user__profile {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .profile-activity {
          text-align: center;
          span {
            font-size: 13px;
          }
        }
      }
      .user__info {
        margin: 12px 0 15px 0;
        span {
          margin-top: 40px;
        }
      }
      .edit-profile {
        height: 29px;
        width: 100%;
        background: #ffffff;
        border: 1px solid rgba(60, 60, 67, 0.18);
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        font-size: 13px;
      }
      .users {
        display: flex;
        gap: 18px;
        text-align: center;
        justify-content: space-around;
        margin-top: 16px;
        .users__user {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 1px solid gray;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 3px;
        }
      }
    }
    .user__videos {
      .video__controller {
        display: flex;
        padding: 15px 0 10px;
        border-bottom: 0.5px solid #c7c3c3bb;
        div {
          width: 180px;
          display: flex;
          justify-content: center;
        }
      }
      .videos {
        width: 101%;
        display: flex;
        gap: 2px;
        flex-wrap: wrap;
        overflow: auto;
        ::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
`;

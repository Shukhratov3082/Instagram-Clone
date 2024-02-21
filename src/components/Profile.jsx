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
import image1 from "../assets/Like/image1.png";
import Kontakt from "../assets/Kontakt.svg";
import FooterBar from "./FooterBar";
const Profile = () => {
  return (
    <Wrapper id="wrapper">
      <div className="header">
        <div className="header__name">
          <img src={Lock} alt="" />
          <p>jacob_w</p>
          <img src={Strelka} alt="" />
        </div>
        <Burger />
      </div>

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
      <VideoContainer>
        <header className="video__controller">
          <div>
            <img src={VideoIcon} alt="" />
          </div>
          <div>
            <img src={Kontakt} alt="" />
          </div>
        </header>
        <div className="videos">
          <img width="124px" src={image1} alt="" />
          <img width="124px" src={image1} alt="" />
          <img width="124px" src={image1} alt="" />
          <img width="124px" src={image1} alt="" />
          <img width="124px" src={image1} alt="" />
          <img width="124px" src={image1} alt="" />
          <img width="124px" src={image1} alt="" />
          <img width="124px" src={image1} alt="" />
          <img width="124px" src={image1} alt="" />
        </div>
      </VideoContainer>
      <FooterBar />
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  position: relative;
  .header {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 20px 25px;
    .header__name {
      display: flex;
      margin: 0 auto;
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
`;
const VideoContainer = styled.div`
  height: 295px;
  overflow: hidden;
  .video__controller {
    display: flex;
    border-bottom: 1px solid #c7c3c3e3;
    div {
      width: 180px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .videos {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow: auto;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

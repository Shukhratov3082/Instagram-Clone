import styled from "styled-components";
import Instagram from "../assets/images/home/Instagram-logo.svg";
import Igtv from "../assets/images/home/igtv.svg";
import Telegram from "../assets/images/home/telegram.svg";
import Heart from "../assets/images/home/heart.png";
import Save from "../assets/images/home/save.svg";
import Comment from "../assets/images/home/comment.svg";
import More from "../assets/images/home/more.svg";
import User1 from "../assets/User1.png";
import User2 from "../assets/User2.png";
import User3 from "../assets/User3.png";
import User4 from "../assets/User4.png";
import FooterBar from "./FooterBar";

const Home = () => {
  const Users = [
    { img: User1, text: "Story" },
    { img: User2, text: "karennne" },
    { img: User3, text: "zackjohn" },
    { img: User4, text: "kieron_d" },
    { img: User1, text: "craig_love" },
    { img: User1, text: "zackjohn" },
    { img: User1, text: "zackjohn" },
  ];
  const VideoContent = [
    {
      img: "https://th.bing.com/th/id/R.081fdf1d5407ab78a6b0b4d3c7be82c2?rik=mEEhgX%2bdojeBng&riu=http%3a%2f%2f2.bp.blogspot.com%2f-G5e9MkCb2-s%2fUAeh7vCOChI%2fAAAAAAAACKs%2ft8sMIqPU8os%2fs1600%2fsummer%2bnights%2bwallpapers%2b(11).jpg&ehk=%2bmlZqdvS%2fDGuU%2f6LhbVn2VL4qejL1PVWmT4VsnFbUkE%3d&risl=&pid=ImgRaw&r=0",
      like: 224,
      title: "aldobalding",
      text: "The Cotswolds",
    },
    {
      img: "https://th.bing.com/th/id/R.081fdf1d5407ab78a6b0b4d3c7be82c2?rik=mEEhgX%2bdojeBng&riu=http%3a%2f%2f2.bp.blogspot.com%2f-G5e9MkCb2-s%2fUAeh7vCOChI%2fAAAAAAAACKs%2ft8sMIqPU8os%2fs1600%2fsummer%2bnights%2bwallpapers%2b(11).jpg&ehk=%2bmlZqdvS%2fDGuU%2f6LhbVn2VL4qejL1PVWmT4VsnFbUkE%3d&risl=&pid=ImgRaw&r=0",
      like: 322,
      title: "cotswolds_culture",
      text: "Violet Zen Blossomscape",
    },
    {
      img: "https://th.bing.com/th/id/R.081fdf1d5407ab78a6b0b4d3c7be82c2?rik=mEEhgX%2bdojeBng&riu=http%3a%2f%2f2.bp.blogspot.com%2f-G5e9MkCb2-s%2fUAeh7vCOChI%2fAAAAAAAACKs%2ft8sMIqPU8os%2fs1600%2fsummer%2bnights%2bwallpapers%2b(11).jpg&ehk=%2bmlZqdvS%2fDGuU%2f6LhbVn2VL4qejL1PVWmT4VsnFbUkE%3d&risl=&pid=ImgRaw&r=0",
      like: 568,
      title: "elyor_domla",
      text: "Violet Zen Blossomscape",
    },
  ];
  return (
    <Wrapper id="wrapper">
      <div className="container">
        <header className="home__header">
          <img
            className="logo"
            width="120px"
            height="50px"
            src={Instagram}
            alt=""
          />
          <div>
            <img className="igtv" src={Igtv} alt="" />
            <img className="path" src={Telegram} alt="" />
          </div>
        </header>
        <div className="home__userProfiles">
          {Users.map(({ img, text }) => (
            <div className="profile" key={Math.random()}>
              <img src={img} alt="" />
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="home__video-container">
          {VideoContent.map(({ img, like, title, text }) => (
            <div className="video-content">
              <div className="video-profile">
                <div className="profile-content">
                  <img src={User1} width={"38px"} height={38} alt="" />
                  <div>
                    <span>aish_hiftz</span>
                    <p>ipsum dolor sit amet.</p>
                  </div>
                </div>
                <img className="more" src={More} alt="" />
              </div>
              <img className="video" src={img} alt="" />
              <div className="video-info">
                <div className="video-events">
                  <div className="event-left">
                    <img src={Heart} alt="" />
                    <img src={Comment} alt="" />
                    <img src={Telegram} alt="" />
                  </div>
                  <img src={Save} alt="" />
                </div>
                <div className="video-text">
                  <p className="likes">
                    like: <span>{like}</span>
                  </p>
                  <p className="title">
                    {title} <span>{text}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterBar />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  .container {
    height: calc(100% - 50px);
    .home__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 15px 0;
      img {
        cursor: pointer;
      }
    }
    .home__userProfiles {
      display: flex;
      align-items: center;
      gap: 5%;
      padding: 0 15px 2px;
      overflow-x: scroll;
      border-bottom: 0.5px solid #cfcfcfbb;
      cursor: pointer;
      ::-webkit-scrollbar {
        display: none;
      }
      .profile {
        text-align: center;
        font-size: 12px;
      }
    }
    .home__video-container {
      height: 100%;
      overflow-x: scroll;
      ::-webkit-scrollbar {
        width: 0px;
      }
      .video-content {
        .video-profile {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 15px;
          .profile-content {
            display: flex;
            align-items: center;
            gap: 4%;
          }

          span {
            font-size: 12px;
          }
          p {
            width: 150px;
            font-size: 10px;
          }
        }
        .video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .video-info {
          padding: 5px 15px 15px;
          font-size: 14px;
          .video-events {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .event-left {
              display: flex;
              align-items: center;
              gap: 13px;
            }
            img {
              cursor: pointer;
            }
          }
          .video-text {
            margin-top: 10px;
            .title span {
              font-weight: 100;
            }
          }
        }
      }
    }
  }
`;

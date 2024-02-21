import React from "react";
import styled from "styled-components";
import qr from "../assets/qr.svg";
import search from "../assets/search-icon.svg";
import FooterBar from "../components/FooterBar";
const Search = () => {
  return (
    <Wrapper id="wrapper">
      <header>
        <div className="header__search">
          <img className="search-icon" src={search} alt="" />
          <input placeholder="Search" type="text" />
          <img className="qr" src={qr} alt="" />
        </div>
        <div className="activities">
          <div className="activity">IGTV</div>
          <div className="activity">Shop</div>
          <div className="activity">Style</div>
          <div className="activity">Sports</div>
          <div className="activity">Auto</div>
          <div className="activity">Music</div>
        </div>
      </header>

      <div className="content">
        <img
          className="img1"
          src="https://i.pinimg.com/originals/40/7d/65/407d65b60ee47423e1f06ffb9893a6f0.jpg"
          alt=""
        />
        <img
          className="img2"
          src="https://th.bing.com/th/id/OIP.Ur17DA1NNSS1TrGD1KPDKwHaHa?rs=1&pid=ImgDetMain"
          alt=""
        />
        <img
          className="img3"
          src="https://th.bing.com/th/id/R.081fdf1d5407ab78a6b0b4d3c7be82c2?rik=mEEhgX%2bdojeBng&riu=http%3a%2f%2f2.bp.blogspot.com%2f-G5e9MkCb2-s%2fUAeh7vCOChI%2fAAAAAAAACKs%2ft8sMIqPU8os%2fs1600%2fsummer%2bnights%2bwallpapers%2b(11).jpg&ehk=%2bmlZqdvS%2fDGuU%2f6LhbVn2VL4qejL1PVWmT4VsnFbUkE%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        <img
          className="img4"
          src="https://th.bing.com/th/id/OIP.7TrUBGreRR4vgwoYldj8pAHaEo?w=2080&h=1300&rs=1&pid=ImgDetMain"
          alt=""
        />
        <img
          className="img5"
          src="https://wallpaperaccess.com/full/4723250.jpg"
          alt=""
        />
        <img
          className="img6"
          src="https://wallup.net/wp-content/uploads/2019/09/432739-lake-pond-golden-trees-tropical-forest-stream-leaves-hdr-ultrahd-black-white-hd-4k-wallpaper-3840x2160.jpg"
          alt=""
        />
        <img
          className="img7"
          src="https://i.pinimg.com/originals/84/a5/77/84a57776d30814e4dde63b03e495e75b.jpg"
          alt=""
        />
        <img
          className="img8"
          src="https://th.bing.com/th/id/R.d206fc6b5c160eb4770d98945c614bf8?rik=4gerRau0%2bYygkQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fHD-Sunrise-Image-Picture.jpg&ehk=Th3Jkjxvj5cX8dgviD9q2f4%2bJ9pBdGDvZ638%2b7DUoVg%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        <img
          className="img9"
          src="https://i.pinimg.com/originals/84/a5/77/84a57776d30814e4dde63b03e495e75b.jpg"
          alt=""
        />
        <img
          className="img10"
          src="https://img.freepik.com/premium-photo/tranquil-bungalow-reflection-silhouettes-caribbean-sunset-beauty_717440-10179.jpg"
          alt=""
        />
        <img
          className="img11"
          src="https://w0.peakpx.com/wallpaper/909/689/HD-wallpaper-ibiza-colorful-glow-sundoun-dusk-beautiful-sunset-twilight-clouds-sea-palm-trees-sun-rays-sunrise-reflection-tropics-rest-exotic-holiday-ocean-relax-sky-pool-palms-water-nture.jpg"
          alt=""
        />
      </div>

      <FooterBar />
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  header {
    width: 100%;
    padding: 15px 8px 0 8px;
    .header__search {
      display: flex;
      gap: 10px;
      position: relative;
      input {
        width: 100%;
        padding: 10px 30px;
        background: rgba(118, 118, 128, 0.12);
        border-radius: 10px;
        border: none;
        font-size: 16px;
        ::placeholder {
          color: rgba(60, 60, 67, 0.6);
        }
      }
      .search-icon {
        position: absolute;
        top: 10px;
        left: 10px;
      }
      .qr {
        cursor: pointer;
      }
    }
    .activities {
      display: flex;
      gap: 6px;
      margin-top: 7px;
      overflow: auto;
      .activity {
        font-size: 14px;
        padding: 8px 12px;
        border: 1px solid rgba(60, 60, 67, 0.18);
        border-radius: 6px;
        cursor: pointer;
      }
      ::-webkit-scrollbar {
        width: 0px;
      }
    }
  }
  .content {
    height: 77.5%;
    display: grid;
    gap: 4px;
    grid-template-areas:
      "medium1 large1 large1"
      "medium2 large1 large1"
      "medium3 medium4 medium5"
      "medium6 medium7 medium8"
      "large2 large2 medium9"
      "large2 large2 medium9";
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 0px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .img1 {
      grid-area: medium1;
    }
    .img2 {
      grid-area: medium2;
    }
    .img3 {
      grid-area: large1;
    }
    .img4 {
      grid-area: medium3;
    }
    .img5 {
      grid-area: medium4;
    }
    .img6 {
      grid-area: medium5;
    }
    .img7 {
      grid-area: medium6;
    }
    .img8 {
      grid-area: medium7;
    }
    .img9 {
      grid-area: medium8;
    }
    .img10 {
      grid-area: large2;
    }
    .img11 {
      grid-area: medium9;
    }
  }
`;

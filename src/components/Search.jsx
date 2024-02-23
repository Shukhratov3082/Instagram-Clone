import React from "react";
import styled from "styled-components";
import Qr from "../assets/images/search/qr.svg";
import SearchIcon from "../assets/images/search/search.svg";
import FooterBar from "../components/FooterBar";
const Search = () => {
  const Images = [
    {
      img: "https://i.pinimg.com/originals/40/7d/65/407d65b60ee47423e1f06ffb9893a6f0.jpg",
      name: "img1",
    },
    {
      img: "https://th.bing.com/th/id/OIP.Ur17DA1NNSS1TrGD1KPDKwHaHa?rs=1&pid=ImgDetMain",
      name: "img2",
    },
    {
      img: "https://th.bing.com/th/id/R.081fdf1d5407ab78a6b0b4d3c7be82c2?rik=mEEhgX%2bdojeBng&riu=http%3a%2f%2f2.bp.blogspot.com%2f-G5e9MkCb2-s%2fUAeh7vCOChI%2fAAAAAAAACKs%2ft8sMIqPU8os%2fs1600%2fsummer%2bnights%2bwallpapers%2b(11).jpg&ehk=%2bmlZqdvS%2fDGuU%2f6LhbVn2VL4qejL1PVWmT4VsnFbUkE%3d&risl=&pid=ImgRaw&r=0",
      name: "img3",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7TrUBGreRR4vgwoYldj8pAHaEo?w=2080&h=1300&rs=1&pid=ImgDetMain",
      name: "img4",
    },
    { img: "https://wallpaperaccess.com/full/4723250.jpg", name: "img5" },
    {
      img: "https://wallup.net/wp-content/uploads/2019/09/432739-lake-pond-golden-trees-tropical-forest-stream-leaves-hdr-ultrahd-black-white-hd-4k-wallpaper-3840x2160.jpg",
      name: "img6",
    },
    {
      img: "https://i.pinimg.com/originals/84/a5/77/84a57776d30814e4dde63b03e495e75b.jpg",
      name: "img7",
    },
    {
      img: "https://th.bing.com/th/id/R.d206fc6b5c160eb4770d98945c614bf8?rik=4gerRau0%2bYygkQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fHD-Sunrise-Image-Picture.jpg&ehk=Th3Jkjxvj5cX8dgviD9q2f4%2bJ9pBdGDvZ638%2b7DUoVg%3d&risl=&pid=ImgRaw&r=0",
      name: "img8",
    },
    {
      img: "https://i.pinimg.com/originals/84/a5/77/84a57776d30814e4dde63b03e495e75b.jpg",
      name: "img9",
    },
    {
      img: "https://img.freepik.com/premium-photo/tranquil-bungalow-reflection-silhouettes-caribbean-sunset-beauty_717440-10179.jpg",
      name: "img10",
    },
    {
      img: "https://w0.peakpx.com/wallpaper/909/689/HD-wallpaper-ibiza-colorful-glow-sundoun-dusk-beautiful-sunset-twilight-clouds-sea-palm-trees-sun-rays-sunrise-reflection-tropics-rest-exotic-holiday-ocean-relax-sky-pool-palms-water-nture.jpg",
      name: "img11",
    },
    {
      img: "https://w0.peakpx.com/wallpaper/909/689/HD-wallpaper-ibiza-colorful-glow-sundoun-dusk-beautiful-sunset-twilight-clouds-sea-palm-trees-sun-rays-sunrise-reflection-tropics-rest-exotic-holiday-ocean-relax-sky-pool-palms-water-nture.jpg",
      name: "img12",
    },
    {
      img: "https://th.bing.com/th/id/R.d206fc6b5c160eb4770d98945c614bf8?rik=4gerRau0%2bYygkQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fHD-Sunrise-Image-Picture.jpg&ehk=Th3Jkjxvj5cX8dgviD9q2f4%2bJ9pBdGDvZ638%2b7DUoVg%3d&risl=&pid=ImgRaw&r=0",
      name: "img13",
    },
  ];
  return (
    <Wrapper id="wrapper">
      <div className="container">
        <header className="search__header">
          <div className="header__search">
            <img className="search-icon" src={SearchIcon} alt="" />
            <input placeholder="Search" type="text" />
            <img className="qr" src={Qr} alt="" />
          </div>
          <div className="header__events">
            <div className="activity">IGTV</div>
            <div className="activity">Shop</div>
            <div className="activity">Style</div>
            <div className="activity">Sports</div>
            <div className="activity">Auto</div>
            <div className="activity">Music</div>
          </div>
        </header>
        <div className="content">
          {Images.map(({ img, name }) => (
            <img key={Math.random()} className={name} src={img} alt="" />
          ))}
        </div>
      </div>

      <FooterBar />
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  .container {
    height: calc(100% - 50px);
    .search__header {
      padding: 10px 15px 0;
      .header__search {
        position: relative;
        display: flex;
        gap: 10px;
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
          top: 11px;
          left: 10px;
        }
        .qr {
          cursor: pointer;
        }
      }
      .header__events {
        display: flex;
        gap: 7px;
        margin: 7px 0;
        overflow: auto;
        .activity {
          font-size: 14px;
          padding: 8px 12px;
          border: 1px solid rgba(60, 60, 67, 0.18);
          border-radius: 6px;
          cursor: pointer;
        }
        ::-webkit-scrollbar {
          display: none;
        }
      }
    }
    .content {
      height: 100%;
      display: grid;
      gap: 4px;
      grid-template-areas:
        "medium1 large1 large1"
        "medium2 large1 large1"
        "medium3 medium4 medium5"
        "medium6 medium7 medium8"
        "large2 large2 medium9"
        "large2 large2 medium9"
        "medium10 medium11 medium11"
        "medium10 medium11 medium11";
      overflow-x: scroll;
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
      .img12 {
        grid-area: medium10;
      }
      .img13 {
        grid-area: medium11;
      }
    }
  }
`;

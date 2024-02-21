import styled from "styled-components";
import Camera from "../assets/Camera.svg";
import Instagram from "../assets/Instagram Logo.svg";
import Igtv from "../assets/IGTV.svg";
import Path from "../assets/Path.svg";
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
  return (
    <Wrapper id="wrapper">
      <header>
        <img className="camera" src={Camera} alt="" />
        <img
          className="instagram"
          width="120px"
          height="50px"
          src={Instagram}
          alt=""
        />
        <div>
          <img className="igtv" src={Igtv} alt="" />
          <img className="path" src={Path} alt="" />
        </div>
      </header>
      <div className="Users">
        {Users.map(({ img, text }) => (
          <div key={Math.random()}>
            <img width="62px" height="62px" src={img} alt="" />
            <p>{text}</p>
          </div>
        ))}
      </div>

      <PostContainer>
        <img
          src="https://th.bing.com/th/id/R.081fdf1d5407ab78a6b0b4d3c7be82c2?rik=mEEhgX%2bdojeBng&riu=http%3a%2f%2f2.bp.blogspot.com%2f-G5e9MkCb2-s%2fUAeh7vCOChI%2fAAAAAAAACKs%2ft8sMIqPU8os%2fs1600%2fsummer%2bnights%2bwallpapers%2b(11).jpg&ehk=%2bmlZqdvS%2fDGuU%2f6LhbVn2VL4qejL1PVWmT4VsnFbUkE%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
      </PostContainer>
      <FooterBar />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  header {
    display: flex;
    align-items: center;
    padding: 20px 12px 0px 12px;
    border-bottom: 1px solid #a1a1a1cd;
    div {
      display: flex;
      gap: 13px;
    }
    .instagram {
      margin: 0 54px 0 101px;
    }
    .path,
    .instagram,
    .igtv,
    .camera {
      cursor: pointer;
    }
  }
  .Users {
    padding: 10px 0 0 10px;
    display: flex;
    gap: 5%;
    overflow-x: scroll;
    overflow-y: hidden;
    cursor: pointer;
    ::-webkit-scrollbar {
      width: 0px;
    }

    div {
      text-align: center;
      p {
        margin-top: 5px;
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
`;
const PostContainer = styled.div`
  height: 67.55%;
  background-color: red;
  ::-webkit-scrollbar {
    width: 0px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

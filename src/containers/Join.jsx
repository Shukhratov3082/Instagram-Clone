import styled from "styled-components";
import InstagramIcon from "../assets/Instagram Logo.svg";
import Avatar from "../assets/avatar1.png";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <Container id="wrapper">
      <img className="instagram" src={InstagramIcon} alt="" />
      <img src={Avatar} alt="" />
      <span>jacob_w</span>
      <Link className="link" to="/login">
        <button>Login</button>
      </Link>
      <Link className="link" to="/login">
        <span className="switch">Switch accounts</span>
      </Link>
      <div>
        <p>
          Don't have an account?
          <Link className="link" to="/signup">
            <span> Sign up.</span>
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Join;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  .instagram {
    margin-bottom: 52px;
  }

  button {
    width: 307px;
    height: 44px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: white;
    margin: 12px 0 30px 0;
    background: rgba(55, 151, 239, 1);

    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: -0.15px;
    color: #ffffff;

    &:hover {
      opacity: 0.7;
    }
  }

  .switch {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: -0.15px;
    color: #3797ef;

    cursor: pointer;
  }

  div {
    width: 100%;
    height: 84px;
    position: absolute;
    bottom: 0;
    text-align: center;
    box-shadow: 0px -0.33px 0px rgba(60, 60, 67, 0.29);
    padding: 18px 0;

    p {
      text-transform: 1;
      color: rgba(0, 0, 0, 0.4);

      span {
        color: rgba(38, 38, 38, 1);
      }
    }
  }
`;

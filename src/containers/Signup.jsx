import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InstagramIcon from '../assets/Instagram Logo.svg'

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();


    function AddSignup() {
        const reqBody = {
            username: username,
            password: password,
            fullName: fullName,
            email: email,
        }
        axios.post('https://searching-server.herokuapp.com/auth/registration', reqBody)
            .then((res) => {
                console.log(res);
                 navigate("/")
            })
    }
    return (
        <Wrapper>
            <Container>
                <img className='instagram' src={InstagramIcon} alt="" />
                <span className='header-text'>Sign up to see photos and <br /> videos from your friends.</span>
                <button>Log in width facebook</button>
                <div className="or">
                    <div className="line"></div>
                    <span>OR</span>
                    <div className="line"></div>
                </div>
                <form>
                    <input onChange={({ target }) => setEmail(target.value)} placeholder='Email' type="text" />
                    <input onChange={({ target }) => setFullname(target.value)} placeholder='Full Name' type="text" />
                    <input onChange={({ target }) => setUsername(target.value)} placeholder='Username' type="text" />
                    <input onChange={({ target }) => setPassword(target.value)} placeholder='Password' type="password" />
                </form>
                <button onClick={AddSignup}>Sign Up</button>
                <span className='cookie-text'>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</span>
            </Container>
        </Wrapper>
    );
}

export default Signup;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;

`
const Container = styled.div`
    width: 375px;
    height: 812px;
    background-color: white;
    padding: 10px 30px;

    .instagram {
        display: block;
        margin: 22px auto 12px auto;
    }

    .header-text {
        display: flex;
        justify-content: center;
        text-align: center;
        
        color: rgba(var(--f52,142,142,142),1);
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
        margin-bottom: 10px;
    }

    .or {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin: 15px 0 20px 0;

        .line {
            height: 2px;
            width: 100%;
            background-color: #6969693d;
        }

        span {
            color: rgba(var(--f52,142,142,142),1);
        }
    }

    form {
        
        input {
            width: 100%;
            padding: 14px 15px;
            margin-bottom: 10px;

            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 17px;
            letter-spacing: -0.15px;
            color: #262626;
            outline: none;

            background: #FAFAFA;
            border: 0.5px solid rgba(43, 43, 43, 0.1);
            border-radius: 5px;

            ::placeholder {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                letter-spacing: -0.15px;
                color: rgba(36, 36, 36, 0.2);
            }
        }
    }

    button {
        height: 44px;
        width: 100%;
        background: #3797EF;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        margin: 20px 0;

        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 17px;
        letter-spacing: -0.15px;
        color: #FFFFFF;

        &:hover {
            opacity: 0.7;
        }
    }

    .cookie-text {
        display: flex;
        justify-content: center;
        text-align: center;
        
        color: rgba(var(--f52,142,142,142),1);
        font-size: 10px;
        font-weight: 600;
        line-height: 20px;
        margin-bottom: 10px;
    }

`;

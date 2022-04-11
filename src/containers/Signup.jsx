import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InstagramIcon from '../assets/Instagram Logo.svg'

const Signup = () => {

    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [website, setWebsite] = useState("");
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");

    const navigate = useNavigate();

    function AddSignup() {
        axios.post("https://searching-server.herokuapp.com/auth/registration", {
            "fullName": fullname,
            "username": username,
            "password": password,
            "website": website,
            "bio": bio,
            "email": email,
            "phone": phone,
            "birthDate": birthDate,
            "gender": gender

        }).then(res => {
            localStorage.setItem('user-token', JSON.stringify(res))
            //    localStorage.setItem("username", username);
            //    localStorage.setItem("password", password);
            navigate("/login")
        }).catch(err => console.log(err))
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
                    <input onChange={({ target }) => setWebsite(target.value)} placeholder='Website' type="text" />
                    <input onChange={({ target }) => setBio(target.value)} placeholder='Bio' type="text" />
                    <input onChange={({ target }) => setPhone(target.value)} placeholder='Phone' type="text" />
                    <input onChange={({ target }) => setBirthDate(target.value)} placeholder='BirthDate' type="date" />
                    <input onChange={({ target }) => setGender(target.value)} placeholder='Gender' type="text" />
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
        margin: 5px auto 5px auto;
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
        margin: 5px 0 10px 0;

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
            padding: 11px 14px;
            margin-bottom: 8px;

            font-style: normal;
            font-weight: 400;
            font-size: 14px;
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
        margin: 10px 0;

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

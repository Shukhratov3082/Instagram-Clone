import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Controller from '../components/Controller';
import Burger from '../components/Burger';
import Strelka from '../assets/Strelka.svg'
import Lock from '../assets/lock.svg'
import Avatar from '../assets/avatar1.png'
import New from '../assets/new.svg'
import Friends from '../assets/friends.png'
import Sport from '../assets/sport.png'
import Design from '../assets/design.png'
import VideoIcon from '../assets/VideoIcon.svg'
import image1 from '../assets/Like/image1.png'
import Kontakt from '../assets/Kontakt.svg'
const Profile = () => {
    return (
        <Wrapper>
            <Container>
                <div className="menu-bar">
                    <div className='jacob'>
                        <img src={Lock} alt="" />
                        <p>jacob_w</p>
                        <img src={Strelka} alt="" />

                    </div>
                    <Burger />
                </div>

                <div className='Content'>
                    <div className='profile'>
                        <div className='radius'>
                            <img src={Avatar} alt="" />
                        </div>
                        <div>
                            <p>54</p>
                            <span>Posts</span>
                        </div>
                        <div>
                            <p>834</p>
                            <span>Followers</span>
                        </div>
                        <div>
                            <p>162</p>
                            <span>Followers</span>
                        </div>

                    </div>
                    <div className='text'>
                        <p>Jacob West</p>
                        <span>Digital goodies designer @pixsellz  <br />
                            Everything is designed.</span>
                    </div>
                    <Link to="/editprofile">
                        <button className='btn'>Edit Profile</button>
                    </Link>
                    <div className='profiles'>
                        <div>
                            <div className='new'>
                                <img src={New} alt="" />
                            </div>
                            <span>New</span>
                        </div>
                        <div>
                            <div className='new'>
                                <img src={Friends} alt="" />
                            </div>
                            <span>Friends</span>
                        </div>
                        <div>
                            <div className='new'>
                                <img src={Sport} alt="" />
                            </div>
                            <span>Sport</span>
                        </div>
                        <div>
                            <div className='new'>
                                <img src={Design} alt="" />
                            </div>
                            <span>Design</span>
                        </div>
                    </div>
                </div>
                <VideoContainer>
                    <header>
                        <div>
                            <img src={VideoIcon} alt="" />
                        </div>
                        <div>
                            <img src={Kontakt} alt="" />
                        </div>
                    </header>
                    <div>
                        <img width='124px' src={image1} alt="" />
                        <img width='124px' src={image1} alt="" />
                        <img width='124px' src={image1} alt="" />
                        <img width='124px' src={image1} alt="" />
                        <img width='124px' src={image1} alt="" />
                        <img width='124px' src={image1} alt="" />
                        <img width='124px' src={image1} alt="" />
                        <img width='124px' src={image1} alt="" />
                        <img width='124px' src={image1} alt="" />
                    </div>
                </VideoContainer>
                <Controller />
            </Container>
        </Wrapper>
    );
}

export default Profile;

const Wrapper = styled.div`
    height: 812px;
    background-color: white;

    .Content{ 
        height: 325px;
        padding: 0 16px;
        border-bottom: 1px solid whitesmoke;
    .btn {
        height: 29px;
        width: 100%;
        background: #FFFFFF;
        border: 1px solid rgba(60, 60, 67, 0.18);
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        font-size: 13px;
    }
    }
`

const Container = styled.div`
    width: 375px;
    height: auto;
    background-color: white;
    position: relative;

    .menu-bar {
        height: 56px;
        width: 100%;
        display: flex;
        justify-content: end;
        align-items: center;
        padding: 20px 29px 0 29px;
     
        .jacob{
            display: flex;
            margin-right: 100px;
            gap: 9px;
        }
        p {   
           font-size: 16px;
        }
    }

    .burger {
        width: 20px;
        cursor: pointer;
    }
    .profile{
        display: flex;
        gap: 28px;
        align-items: center;
        .radius{
            width: 96px;
            height: 95px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 2px solid gray;
        }
        div{
            text-align: center;
            span{font-size: 13px;}
        
        }
    }
    .text{
        margin: 12px 0 15px 0;
    }
    .profiles{
        display: flex;
        gap: 18px;
        text-align: center;
        margin-top: 16px;
        .new{
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
    
`;
const VideoContainer = styled.div`
    height: 353px;
    overflow: hidden;
    header{
        display: flex;
        border-bottom: 1px solid #c7c3c3e3;
        div{
            width: 180px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    div{
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3,124px);
        grid-template-rows:repeat(3,124px);
        overflow: auto;
        ::-webkit-scrollbar {
            width: 0px;
        }
    }
`
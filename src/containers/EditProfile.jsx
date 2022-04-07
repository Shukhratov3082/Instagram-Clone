import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import avatar from '../assets/avatar1.png'

const EditProfile = () => {
    return (
        <Wrapper>
            <Container>
                <div className="edit-profile-container">
                    <Link className='link' to="/profile">
                        <span className='cancel'>Cancel</span>
                    </Link>
                    <span className='edit'>Edit Profile</span>
                    <Link className='link' to="/profile">
                        <span className='done'>Done</span>
                    </Link>
                </div>
                <div className="profile-photo">
                    <div>
                        <img src={avatar} alt="" />
                        <span>Change Profile Photo</span>
                    </div>
                </div>
                <form>
                    <div className="form-box">
                        <span className='text'>Name</span>
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className="form-box">
                        <span className='text'>Username</span>
                        <input type="text" placeholder='Username' />
                    </div>
                    <div className="form-box">
                        <span className='text'>Website</span>
                        <input type="text" placeholder='Website' />
                    </div>
                    <div className="form-box">
                        <span className='text'>Bio</span>
                        <input className='bio' type="text" placeholder='Bio' />
                    </div>
                    <div className="profi-account">
                        <span>Switch to Professional Account</span>
                    </div>
                    <div className="private-info">
                        <span>Private Information</span>
                    </div>
                    <div className="form-box">
                        <span className='text'>Email</span>
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className="form-box">
                        <span className='text'>Phone</span>
                        <input type="text" placeholder='Phone' />
                    </div>
                    <div className="form-box">
                        <span className='text'>Gender</span>
                        <input type="text" placeholder='Gender' />
                    </div>
                </form>
            </Container>
        </Wrapper>
    );
}

export default EditProfile;

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
    padding: 24px 12px 0 12px;

    .edit-profile-container {
        height: 56px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .cancel {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;
            color: #262626;
            cursor: pointer;
        }

        .edit {
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 21px;
            text-align: center;
            color: #262626;
        }

        .done {
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 21px;
            text-align: right;
            color: #3897F0;
            cursor: pointer;
        }
    }

    .profile-photo {
        width: 100%;
        height: 165px;
        padding: 18px 0 13px 0;
        display: flex;
        justify-content: center;

        img {
            width: 95px;
            height: 95px;
            display: block;
            margin: 0 auto;
        }

        span {
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 21px; 
            text-align: center;
            letter-spacing: -0.05px;
            color: #3897F0;
            display: block;
            margin-top: 12px;
            cursor: pointer;
        }
    }

    form {
        height: 400px;
        width: 100%;

        .form-box {
            display: flex;
            gap: 30px;

            .text {
                width: 100px;
                padding: 15px 0;
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 18px;
                letter-spacing: -0.25px;
                color: #262626;
            }

            input {
                padding: 14px 16px;
                width: 279px;
                border: none;
                border-bottom: 1px solid #676767b5;
                outline: none;

                ::placeholder {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: -0.33px;
                    color: rgba(60, 60, 67, 0.3);
                }
            }

            .bio {
                    border-bottom: none;
            }
        }

        .profi-account {
            height: 49px;
            width: 100%;
            padding: 15px;
            border-top: 1px solid #676767b5;

            span {
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 18px;
                letter-spacing: -0.25px;
                color: #3897F0;
                cursor: pointer;
            }
        }

        .private-info {
            height: 49px;
            width: 100%;
            padding: 15px;

            span {
                font-style: normal;
                font-weight: 600;
                font-size: 15px;
                line-height: 20px;
                letter-spacing: -0.25px;
                color: #262626;
            }
        }
    }
`;
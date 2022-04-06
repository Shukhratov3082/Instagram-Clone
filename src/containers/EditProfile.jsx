import React from 'react';
import styled from 'styled-components';
import avatar from '../assets/avatar1.png'

const EditProfile = () => {
    return (
        <Wrapper>
            <Container>
                <div className="edit-profile-container">
                    <span className='cancel'>Cancel</span>
                    <span className='edit'>Edit Profile</span>
                    <span className='done'>Done</span>
                </div>
                <div className="profile-photo">
                    <div>
                        <img src={avatar} alt="" />
                        <span>Change Profile Photo</span>
                    </div>
                </div>
                <form>
                    <div className="form-box">
                        <span>Name</span>
                        <input type="text" placeholder='Name' />
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

        }
    }

    .profile-photo {
        width: 100%;
        height: 375px;
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
        }
    }

    form {
        height: 400px;
        width: 100%;
        display: flex;
        gap: 40px;

        span {
            padding: 15px;
        }

        input {
            padding: 14px 16px;
            
        }
    }
`;
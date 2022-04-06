import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Controller from '../components/Controller';
import Burger from '../components/Burger';

const Profile = () => {
    return (
        <Wrapper>
            <Container>
                <div className="menu-bar">
                    <span className='nik'>jacob_w</span>
                    <Burger />
                </div>
                <Content>
                    <Link to="/editprofile">
                        <button className='btn'>Edit Profile</button>
                    </Link>
                </Content>
                <Controller />
            </Container>
        </Wrapper>
    );
}

export default Profile;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
`
const Content = styled.div`
    height: 645px;
    width: 100%;
    padding: 0 16px;
    
    .btn {
        margin-top: 100px;
        height: 29px;
        width: 100%;
        background: #FFFFFF;
        border: 1px solid rgba(60, 60, 67, 0.18);
        border-radius: 6px;

        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 18px;
        text-align: center;
        color: #262626;
    }
`;

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
    }

    .nik {
        margin-right: 100px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: -0.33px;
        color: #262626;

    }

    .burger {
        width: 20px;
        cursor: pointer;
    }
`;
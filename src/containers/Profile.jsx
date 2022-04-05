import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Controller from '../components/Controller';

const Profile = () => {
    return (
        <Wrapper>
            <Container>
                <div className="menu-bar"></div>
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

    .menu-bar {
        height: 56px;
        width: 100%;
    }
`;
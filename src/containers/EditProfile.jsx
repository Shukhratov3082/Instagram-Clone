import React from 'react';
import styled from 'styled-components';

const EditProfile = () => {
    return (
        <Wrapper>
            <Container>
                <div className="edit-profile-container">
                    <span className='cancel'>Cancel</span>
                    <span className='edit'>Edit Profile</span>
                    <span className='done'>Done</span>
                </div>
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
`;
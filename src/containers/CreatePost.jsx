import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Createpost = () => {
    return (
        <Wrapper>
            <Container>
                <div className="confirmation">
                    <Link className='link' to="/home">
                        <span className='cancel'>Cancel</span>
                    </Link>
                    <span className='next'>Next</span>
                </div>
            </Container>
        </Wrapper>
    );
}

export default Createpost;

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

    .confirmation {
        height: 56px;
        width: 100%;
        padding: 24px 12px 0 12px;
        display: flex;
        justify-content: space-between;

        .cancel {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;
            letter-spacing: -0.33px;
            color: #262626;
            cursor: pointer;
        }

        .next {
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 21px;
            text-align: right;
            letter-spacing: -0.33px;
            color: #3897F0;
            cursor: pointer;
        }
    }
`;

import React from 'react';
import styled from 'styled-components';
import Controller from '../components/Controller';
import qr from '../assets/qr.svg';
import search from '../assets/search-icon.svg';

const Search = () => {
    return (
        <Wrapper>
            <Container>
                <SearchContainer>
                    <div className="input-container">
                        <img className='search-icon' src={search} alt="" />
                        <input placeholder='Search' type="text" />
                        <img className='qr' src={qr} alt="" />
                    </div>
                    <div className="menues">
                        <div className="menu">IGTV</div>
                        <div className="menu">Shop</div>
                        <div className="menu">Style</div>
                        <div className="menu">Sports</div>
                        <div className="menu">Auto</div>
                        <div className="menu">Music</div>
                    </div>
                </SearchContainer>
                <Content />
                <Controller />
            </Container>
        </Wrapper>
    );
}

export default Search;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
`;

const Container = styled.div`
    width: 375px;
    height: 812px;
    background-color: white;
`

const SearchContainer = styled.div`
    width: 100%;
    height: 100px;
    padding: 16px 8px 7px 8px;

    .input-container {
        display: flex;
        gap: 10px;
        position: relative;

        .search-icon {
            position: absolute;
            top: 10px;
            left: 10px;
        }

        input {
            width: 100%;
            padding: 10px 34px;
            background: rgba(118, 118, 128, 0.12);
            border-radius: 10px;
            border: none;

            ::placeholder {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 22px;
                letter-spacing: -0.3px;
                color: rgba(60, 60, 67, 0.6);
            }
        }

        .qr {
            cursor: pointer;
        }
    }

    .menues {
        margin-top: 7px;
        display: flex;
        gap: 6px;
        overflow: auto;

        ::-webkit-scrollbar {
            display: none;
        }

        .menu {
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: -0.2px;
            color: #262626;
            padding: 8px 12px;
            border: 1px solid rgba(60, 60, 67, 0.18);
            border-radius: 6px;
            cursor: pointer;
        }
    }
`;

const Content = styled.div`
    width: 100%;
    height: 633px;
    background-color: aqua;
`;

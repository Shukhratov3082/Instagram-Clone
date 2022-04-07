import React from 'react';
import styled from 'styled-components';
import Controller from '../components/Controller';
import qr from '../assets/qr.svg';
import search from '../assets/search-icon.svg';
import image1 from '../assets/Like/image1.png'
import image3 from '../assets/Like/image3.png'
const Search = () => {
    return (
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
            <Content>
                <img className='img1' src={image1} alt="" />
                <img className='img2' src={image1} alt="" />
                <img className='img3' src={image3} alt="" />
                <img className='img4' src={image1} alt="" />
                <img className='img5' src={image1} alt="" />
                <img className='img6' src={image1} alt="" />
                <img className='img7' src={image1} alt="" />
                <img className='img8' src={image1} alt="" />
                <img className='img9' src={image1} alt="" />
                <img className='img10' src={image3} alt="" />
                <img className='img11' src={image1} alt="" /> 
       
            </Content>
            <Controller />
        </Container>

    );
}

export default Search;



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
    height: 628px;
    background-color: aqua;
    overflow: auto;
    ::-webkit-scrollbar {
            width: 0px;
        }
    .img1{ width: 100%;grid-area:little1;}
    .img2{ width: 100%;grid-area:little2;}
    .img3{ width: 100%;grid-area:big1;}
    .img4{ width:100%; grid-area:little3;}
    .img5{ width:100%; grid-area:little4;}
    .img6{ width:100%; grid-area:little5;}
    .img7{ width:100%; grid-area:little6;}
    .img8{ width:100%; grid-area:little7;}
    .img9{ width:100%; grid-area:little8;}
    .img10{ width:100%; grid-area:big2;}
    .img11{  width:100%; grid-area:little9;}
  

    display: grid;
     grid-template-areas:
     'little1 big1 big1'
     'little2 big1 big1'
     'little3 little4 little5'
     'little6 little7 little8'
     'big2 big2 little9'
     'big2 big2 little9'
     

  
     
   
    
   
`;

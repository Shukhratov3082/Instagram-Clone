import React from 'react';
import styled from 'styled-components'
import Profile1 from '../assets/Like/Profile1.png'
import Profile2 from '../assets/Like/Profile2.png'
import Profile3 from '../assets/Like/Profile3.png'
import Profile4 from '../assets/Like/Profile4.png'
import Profile5 from '../assets/Like/Profile5.png'
import image1 from '../assets/Like/image1.png'
import image2 from '../assets/Like/image2.png'
import image3 from '../assets/Like/image3.png'
import {NavLink } from 'react-router-dom';
import Controller from './Controller';
const Following = () => {
    return (
        <Wrapper>

            <header>
                <NavLink to={'/like/following'}>
                    <p>Following</p>
                </NavLink>
                <NavLink to={'/like/you'}>
                    <p>You</p>
                </NavLink>
            </header>

            <div className='obshiy'>
                <div className='box1'>
                    <div>
                        <div className='top'>
                            <img src={Profile1} alt="" />
                            <p>karennne liked your 3 photo. <span>3h</span></p>
                        </div>
                        <div className='bottom'>
                            <img src={image1} alt="" />
                            <img src={image2} alt="" />
                            <img src={image3} alt="" />
                        </div>

                    </div>
                </div>
                <div className='box2'>
                    <div>
                        <img src={Profile2} alt="" />
                        <p>kiero_d, zackjohn and 26 others <br /> liked your photo.  <span>3h</span></p>
                        <img src={image2} alt="" />
                    </div>
                </div>
                <div className='box3'>
                    <div>
                        <img src={Profile4} alt="" />
                        <p> <b>kiero_d </b> started following <br /> <b>craig_love.</b> <span>3h</span></p>
                    </div>
                </div>
                <div className="box4">
                    <div className='top'>
                        <img src={Profile3} alt="" />
                        <p>karennne liked your 3 photo. <span>3h</span></p>
                    </div>
                    <div className='image-container'>
                        <img src={image1} alt="" />
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                        <img src={image1} alt="" />
                    </div>

                </div>
                <div className='box5'>
                    <div>
                        <img src={Profile2} alt="" />
                        <p>maxjacobson and zackjohn liked <b>mis_potter’s</b> post. <span>3h</span></p>
                        <img src={image2} alt="" />
                    </div>
                </div>
                <div className='box6'>
                    <div>
                        <img src={Profile2} alt="" />
                        <p>maxjacobson and zackjohn liked <b>mis_potter’s</b> post. <span>3h</span></p>
                        <img src={image2} alt="" />
                    </div>
                </div>
                <div className='box7'>
                    <div>
                        <img src={Profile1} alt="" />

                        <p> karennne liked  <b> martini_rond’s </b> <br /> comment: <span>@martini_rond </span>Nice!<span className='gray'>3d</span></p>
                        <img src={image2} alt="" />
                    </div>
                </div>
                <div className="box8">
                    <div className='top'>
                        <img src={Profile5} alt="" />
                        <p>karennne liked your 3 photo. <span>3h</span></p>
                    </div>
                    <div className='image-container'>
                        <img src={image1} alt="" />
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                    </div>

                </div>
            </div>
            <Controller />

        </Wrapper>

    );
}

export default Following;
const Wrapper = styled.div`
    width: 375px;
    height: 812px;
    background-color: white;

    header{
        display: flex;
        height: 88px;
        padding: 44px 8px 0 8px;
        border-bottom: 2px solid #c7c3c3e3;
        a{
            width: 180px;
            height: 44px;
            text-align: center;
            text-decoration: none;
            color: black;
            &.active{
                    border-bottom: 1px solid black;
                }
          
        }
    }
    .obshiy{
        height: 640px;
        overflow: auto;
        ::-webkit-scrollbar {
            width: 0px;
        }

     .box1{ 
            display: flex;
            flex-direction: column;
            height: 120px;
            padding: 13px 16px 16px 16px;
            div{
                gap: 12px; 
                    .top{
                        display: flex;
                        align-items: center;
                    }
                    .bottom{
                        display: flex;
                        padding: 0 0 0 55px;
                    }
                }
        }
    }
    .box2{
        height: 60px;
        padding: 13px 16px 8px 16px;
        h4{margin-bottom: 20px; }
        div{
            display: grid;
            grid-template-columns: 44px 230px 1fr;
            align-items:center;
            gap: 12px;
           
            p {
                font-size: 13px;
                span{
                    color: #a8a7a7;
                 }
            }
        }
      
     }
     .box3{  
        height: 70px;
        padding: 15px 16px;
        div{
            display: flex;
            align-items:center;
            gap: 12px;   
            p{
                font-size: 13px;
                b{font-size: 14px;}
                span{color: #a8a7a7;}
            } 
        }
    }
    .box4{
        height: 160px;
        padding: 8px 16px;
        .top{
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .image-container{
            display: grid;
            grid-template-columns: repeat(6,44px);
            grid-template-rows: 1fr 1fr;
            gap: 4px;
            justify-content: flex-end;
        }
    }
    .box5{
        height: 60px;
        padding: 13px 16px 8px 16px;
        h4{margin-bottom: 20px; }
        div{
            display: grid;
            grid-template-columns: 44px 230px 1fr;
            align-items:center;
            gap: 12px;
           
            p {
                font-size: 13px;
                span{
                    color: #a8a7a7;
                 }
            }
        }
      
     }
     .box6{
        height: 60px;
        padding: 13px 16px 8px 16px;
        h4{margin-bottom: 20px; }
        div{
            display: grid;
            grid-template-columns: 44px 230px 1fr;
            align-items:center;
            gap: 12px;
           
            p {
                font-size: 13px;
                span{
                    color: #a8a7a7;
                 }
            }
        }
      
     }
     .box7{
        height: 60px;
        padding: 13px 16px 8px 16px;
        h4{margin-bottom: 20px; }
        div{
            display: grid;
            grid-template-columns: 44px 230px 1fr;
            align-items:center;
            gap: 12px;
           
            p{
                font-size: 13px;
                span{
                    color: #3737f7;
                    cursor: pointer;
                }
                .gray{color: gray;}     
            }
        }
      
     }
     .box8{
        height: 120px;
        padding: 8px 16px;
        .top{
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .image-container{
            display:flex;
            gap: 4px;
            padding: 0 0 0 60px;
        }
    }
     
`


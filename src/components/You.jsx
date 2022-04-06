import React from 'react';
import styled from 'styled-components'
import Profile1 from '../assets/Like/Profile1.png'
import Profile2 from '../assets/Like/Profile2.png'
import Profile3 from '../assets/Like/Profile3.png'
import Profile4 from '../assets/Like/Profile4.png'
import Profile5 from '../assets/Like/Profile5.png'
import Profile6 from '../assets/Like/Profile6.png'
import image1 from '../assets/Like/image1.png'
import image2 from '../assets/Like/image2.png'
import image3 from '../assets/Like/image3.png'
import Like from '../assets/Like/like.svg'
import {  NavLink } from 'react-router-dom';
import Controller from './Controller';
const You = () => {
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
                <div className='Follow-request'>
                    <p>Follow Requests</p>
                </div>
                <div className='New'>
                    <h4>New</h4>
                    <div>
                        <img src={Profile1} alt="" />
                        <p>karennne liked your photo. <span>1h</span></p>
                        <img src={image1} alt="" />
                    </div>
                </div>
                <div className='Today'>
                    <h4>Today</h4>
                    <div>
                        <img src={Profile2} alt="" />
                        <p>kiero_d, zackjohn and 26 others <br /> liked your photo.  <span>3h</span></p>
                        <img src={image2} alt="" />
                    </div>
                </div>
                <div className='This-week'>
                    <h4>This Week</h4>
                    <div className='craig-love'>
                        <img src={Profile3} alt="" />
                        <p> <b>craig_love </b> mentioned you in a comment: <span>@jacob_w </span> exactly..<br /> 2<span className='gray'>d</span></p>
                        <img src={image3} alt="" />
                        <div>
                            <img src={Like} alt="" /><span>Reply</span>
                        </div>
                    </div>
                    <div className='Profiles'>
                        <div>
                            <img src={Profile4} alt="" />
                            <p> <b>martini_rond </b> started <br /> following you.<span>3d</span></p>
                            <button className='message'>Message</button>
                        </div>
                        <div>
                            <img src={Profile5} alt="" />
                            <p> <b>maxjacobson</b> zackjohn and 26 others <br /> liked your photo.  <span>3d</span></p>
                            <button className='message'>Message</button>
                        </div>
                        <div>
                            <img src={Profile6} alt="" />
                            <p><b>mis_potter</b> started following <br /> you. <span>3h</span></p>
                            <button className='follow'>Follow</button>
                        </div>
                    </div>
                </div>
                <div className='thisMonth'>
                    <h4>
                        This Month
                    </h4>
                    <div>
                        <img src={Profile4} alt="" />
                        <p>mis_potter started following  you.3h</p>
                    </div>
                </div>
            </div>
            <Controller />
        </Wrapper>

    );
}

export default You;
const Wrapper = styled.div`
   width: 375px;
    height: 812px;
    background-color: white;
    header{
        display: flex;
        height: 88px;
        padding: 44px 8px 0 8px;
        border-bottom: 1px solid #c7c3c3e3;
        a{
            width: 180px;
            height: 44px;
            text-align: center;
            text-decoration: none;
            color: black;
            &.active{
                    border-bottom: 2px solid black;
                }
          
        }
    }
    .obshiy{
        height: 640px;
        overflow: auto;
        ::-webkit-scrollbar {
            width: 0px;
        }

.Follow-request,.New,.Today,.This-week{ border-bottom: 1px solid #c7c3c3e3;}
    
    .Follow-request{
         height: 48px;
         padding: 14px 16px;
        
     }
     .New,.Today{
        height: 106px;
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
   
     .New  p{
                font-size: 13px;

                b{font-size: 14px;}

                span{color: #a8a7a7;}
               
            }
     
     .This-week{
        height: 332px;
        padding: 13px 16px 8px 16px;

        h4{
            margin-bottom: 20px;
           
        }
        .craig-love{
            display: grid;
            height: 91px;
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
            div{
                display: flex;
                position: relative;
                bottom: 12px;
                left: 55px;
                gap: 14px;
                span{
                    font-size: 11px;
                    color: #838285;
                }
            }
        }
        .Profiles{
            padding: 8px 0;
            display: flex;
            flex-direction: column;
            gap: 17px;

            div{
               display: grid;
               grid-template-columns: 44px 185px 1fr;
               align-items:center;
               gap: 12px;
                  p{
                    font-size: 13px;
                    span{color: #a8a7a7;}                    
                    b{font-size: 14px;}
                  }
              }
            }
            .message,.follow{
                width: 90px;
                height: 28px;
                background-color: white;
                font-weight: 600;
                font-size: 14px;
                border-radius: 5px;
                border: 1px solid #a8a7a7;
            }
            .follow{
                background-color: blue;
                border: none;
                color:white;
            }
     }
     .thisMonth{
        margin:8px 0 21px 16px;
        h4{margin-bottom:7px;}
        div{
               display: grid;
               grid-template-columns: 44px 185px 1fr;
               align-items:center;
               gap: 12px;

                  p{font-size: 13px;}
            }
        }
    }  
`


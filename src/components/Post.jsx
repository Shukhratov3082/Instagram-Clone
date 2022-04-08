import React from 'react';
import styled from 'styled-components';
import Vitka from '../assets/vitka.svg'
import Points2 from '../assets/points2.svg'
import Comment from '../assets/Comment.svg'
import Like from '../assets/Like.svg'
import Profile from '../assets/Profile.png'
import Path from '../assets/Path.svg'
import Points from '../assets/points.svg'
import Galochka from '../assets/check mark.svg';
import HomeProfile from '../assets/HomeProfile.png'


const Post = ({ img, title, id, location, hashtag }) => {

    return (
        <Wrapper>
            <div className='profile'>
                <img src={HomeProfile} alt="" />
                <div>
                    <p>John <img src={Galochka} alt="" /></p>
                    <p>{location}</p>
                </div>
                <img className='points' src={Points} alt="" />
            </div>
            <img height='375px' width='375px' src={`https://searching-server.herokuapp.com/attach/open/${img[1]}`} alt="" />
            <div className='details'>
                <div>
                    <div className='left'>
                        <img width='23px' height='20px' src={Like} alt="" />
                        <img src={Comment} alt="" />
                        <img src={Path} alt="" />
                    </div>
                    <div className='right'>
                        <img src={Points2} alt="" />
                        <img src={Vitka} alt="" />
                    </div>
                </div>
                <div className='bottom'>
                    <img width='17px' height='17px' src={Profile} alt="" /> <span>Liked by craig_love and 44,686 others</span>
                    <p>{title}</p>
                    <p>{hashtag}</p>
                </div>
            </div>
        </Wrapper>
    );
}

export default Post;

const Wrapper = styled.div`
        height: 547px;
        .details{
            padding: 13px 14px 10px 14px;
            height: 118px;
            div{
                display: flex;
                align-items: center;
                .left{
                    display: flex;
                    gap: 20px;
                    margin-right: 57px;
                }
                  .right{
                    width: 195px;
                    display: flex;
                    justify-content: space-between;
                 }
            }
            .bottom{
                display: block;
                margin-top: 12px;
                img{
                    position: relative;
                    top: 4px;
                }
                span,p{
                    font-size: 13px;
                }

            }
         
            
        }
        .profile{
        height: 54px;
        padding: 11px 10px;
        display: flex;
        gap: 10px;
        div{
            display: block;
        }
        .points{
            width: 14px;
            position: relative;
            left: 114px;
            }
    }
`;

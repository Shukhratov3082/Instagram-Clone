import React from 'react';
import styled from 'styled-components';
// import imageContainer from '../assets/Home-imageContainer.png'
import Vitka from '../assets/vitka.svg'
import Points2 from '../assets/points2.svg'
import Comment from '../assets/Comment.svg'
import Like from '../assets/Like.svg'
import Profile from '../assets/Profile.png'
import Path from '../assets/Path.svg'


const Post = ({ img, title, id }) => {
    return (
        <Wrapper>
            <img src={img} alt="" />
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
                </div>
            </div>
        </Wrapper>
    );
}

export default Post;

const Wrapper = styled.div`
    height: 500px;
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
`;

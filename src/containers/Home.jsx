import styled from 'styled-components';
import Controller from '../components/Controller';
import Vitka from '../assets/vitka.svg'
import Points from '../assets/points.svg'
import Points2 from '../assets/points2.svg'
import Galochka from '../assets/check mark.svg';
import Comment from '../assets/Comment.svg'
import HomeProfile from '../assets/HomeProfile.png'
import imageContainer from '../assets/Home-imageContainer.png'
import Camera from '../assets/Camera.svg'
import Instagram from '../assets/Instagram Logo.svg'
import Igtv from '../assets/IGTV.svg'
import Path from '../assets/Path.svg'
import User1 from '../assets/User1.png'
import User2 from '../assets/User2.png'
import User3 from '../assets/User3.png'
import User4 from '../assets/User4.png'
import User5 from '../assets/User5.png'
import Like from '../assets/Like.svg'
import Profile from '../assets/Profile.png'



const Home = () => {
    const Users = [
        { img: User1, text: "Your Story" },
        { img: User2, text: "karennne" },
        { img: User3, text: "zackjohn" },
        { img: User4, text: "kieron_d" },
        { img: User1, text: "craig_love" },
    ]
    return (
        <Wrapper>
            <header>
                <img className='camera' src={Camera} alt="" />
                <img className='instagram' width='120px' height='50px' src={Instagram} alt="" />
                <div>
                    <img className='igtv' src={Igtv} alt="" />
                    <img className='path' src={Path} alt="" />
                </div>
            </header>
            <div className='Users'>
                {Users.map(({ img, text }) => <div>
                    <img width='62px' height='62px' src={img} alt="" />
                    <p>{text}</p>
                </div>)}
            </div>
            <div className='profile'>
                <img src={HomeProfile} alt="" />
                <div>
                    <p>joshua_l <img src={Galochka} alt="" /></p>
                    <p>Tokyo, Japan</p>
                </div>
                <img className='points' src={Points} alt="" />
            </div>
            <div className='image-container'>
                <img src={imageContainer} alt="" />
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
                        <p>joshua_l The game in Japan was amazing and I want to share some photos</p>
                    </div>
                </div>
            </div>

            <Controller />
        </Wrapper>
    );
}

export default Home;

const Wrapper = styled.div`
    width: 375px;
    overflow: hidden;
    background-color: white;


    header{
        display: flex;
        align-items: center;
        padding: 20px 12px 0px 12px;
        border-bottom: 1px solid #a1a1a1cd;
        div{
            display: flex;
            gap: 13px;
        }
        .instagram{
            margin: 0 54px 0 101px;
        }
        .path,.instagram,.igtv,.camera{
            cursor: pointer;

        }
    
    }  
    .Users{
        height:111px;
        padding: 0;
        display: grid;
        align-items: center;
        overflow: auto;
        grid-template-columns: repeat(5,80px);
        cursor: pointer;
        ::-webkit-scrollbar {
            width: 0px;
        }
        
        div{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 80px;

            p{
                margin-top: 5px;
                font-size: 12px;
                font-weight: 400;
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
                left: 183px;
            }
    }
    .image-container{
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
    }
`
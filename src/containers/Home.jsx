import styled from 'styled-components';
import Controller from '../components/Controller';
import Points from '../assets/points.svg'
import Galochka from '../assets/check mark.svg';
import HomeProfile from '../assets/HomeProfile.png'
import Camera from '../assets/Camera.svg'
import Instagram from '../assets/Instagram Logo.svg'
import Igtv from '../assets/IGTV.svg'
import Path from '../assets/Path.svg'
import User1 from '../assets/User1.png'
import User2 from '../assets/User2.png'
import User3 from '../assets/User3.png'
import User4 from '../assets/User4.png'
import { useEffect, useState } from 'react';
import API from '../utils/axios';
import Post from '../components/Post';

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        API.get("/post").then(res => setPosts(res.data))
    }, [])

    console.log(posts)

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
                {Users.map(({ img, text }) => <div key={Math.random()}>
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
            <Post>
                {posts.map(({ id, title, attach }) =>
                    <Post
                        id={id}
                        key={id}
                        img={attach}
                        title={title}
                    />)}
            </Post>
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
        
    }
`
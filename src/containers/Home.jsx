import styled from 'styled-components';
import Controller from '../components/Controller';

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
            .catch(res => console.log(res))
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


            <PostContainer>
                {posts.map(({ id, title, attachs, location }) =>
                    <Post
                        id={id}
                        key={id}
                        img={attachs}
                        title={title}
                        location={location}
                    />)}
            </PostContainer>
            <Controller />
        </Wrapper>
    );
}

export default Home;

const Wrapper = styled.div`
    width: 375px;
    height: 812px;
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
   
 
`
const PostContainer = styled.div`
    height: 547px;
`
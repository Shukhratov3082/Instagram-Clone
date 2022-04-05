import styled from 'styled-components';
import { ReactComponent as Home } from '../assets/Home.svg'
import { ReactComponent as Like } from '../assets/Like.svg'
import Profile from '../assets/Profile.png'
import { ReactComponent as Search } from '../assets/Search.svg'
import { ReactComponent as Create } from '../assets/Create.svg'
import { NavLink } from 'react-router-dom';

const Controller = () => {
    const Images = [
        { to: "/home", img: <Home /> },
        { to: "/search", img: <Search /> },
        { to: "/create", img: <Create /> },
        { to: "/like", img: <Like /> }
    ]
    return (
        <Wrapper>

            {Images.map(({ to, img }) => <div>
                <NavLink to={to}>
                    {img}
                </NavLink>
            </div>)}

            <div className='profile'>
                <img src={Profile} alt="" />
            </div>

        </Wrapper>
    );
}

export default Controller;
const Wrapper = styled.div`
    width: 100%;
    height: 79px;
    display: grid;
    grid-template-columns: repeat(5,75px);
    div{
        width: 75px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        .profile{
        border: 2px solid white;
        border-radius: 30px;
        padding: 3px;
        height: 32px;
        
        &:active{
        border: 2px solid black;

        }

    }
 
    a{
        &:active{   
            svg path{
                fill: red;
            }
        }
    }

    }

   
`

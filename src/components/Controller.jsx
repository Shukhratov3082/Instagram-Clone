import styled from 'styled-components';
import HomeWhite from '../assets/HomeWhite.svg'
import Like from '../assets/Like.svg'
import Profile from '../assets/Profile.png'
import Search from '../assets/Search.svg'
import Create from '../assets/Create.svg'
import { NavLink } from 'react-router-dom';

const Controller = () => {
    const Images = [

        { to: "/home", img: HomeWhite },
        { to: "/search", img: Search },
        { to: "/create", img: Create },
        { to: "/like", img: Like },
        { to: "/profile", img: Profile }
    ]
 
    return (
            <Menu>
                {Images.map(({ to, img }) => <div>
                    <NavLink to={to}>
                        <img src={img} alt="" />
                    </NavLink>
                </div>)}
            </Menu>
    );
}

export default Controller;


const Menu = styled.div`
    width: 100%;
    height: 79px;
    display: grid;
    grid-template-columns: repeat(5,75px);
    border-top: 1px solid #a1a1a1cd;
    
    div{
        width: 75px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
}
    
`

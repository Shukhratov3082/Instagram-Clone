import React from 'react';
import styled from 'styled-components';
import icon from '../assets/menubar-icons/Icon.svg'
import icon1 from '../assets/menubar-icons/Icon (1).svg'
import icon2 from '../assets/menubar-icons/Icon (2).svg'
import icon3 from '../assets/menubar-icons/Icon (3).svg'
import icon4 from '../assets/menubar-icons/Icon (4).svg'
import icon5 from '../assets/menubar-icons/Icon (5).svg'
import icon6 from '../assets/menubar-icons/Icon (6).svg'
import settings from '../assets/menubar-icons/settings.svg'

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <div className='navigate' >
                <div className="nik">s.khasanov_</div>
                <div className='nav'>
                    <li>
                        <div className="icon">
                            <img src={icon} alt="" />
                        </div>
                        <div className="text">
                            <span className='menu-text'>Archive</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="text">
                            <span className='menu-text'>Your Activity</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <img src={icon2} alt="" />
                        </div>
                        <div className="text">
                            <span className='menu-text'>Nametag</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <img src={icon3} alt="" />
                        </div>
                        <div className="text">
                            <span className='menu-text'>Saved</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <img src={icon4} alt="" />
                        </div>
                        <div className="text">
                            <span className='menu-text'>Close Friends</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <img src={icon5} alt="" />
                        </div>
                        <div className="text">
                            <span className='menu-text'>Discover People</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <img src={icon6} alt="" />
                        </div>
                        <div className="text">
                            <span className='menu-text'>Open Facebook</span>
                        </div>
                    </li>
                    <div className="settings">
                        <img src={settings} alt="" />
                        <span>Settings</span>
                    </div>
                </div>
            </div>
        </Ul>
    )
}

export default RightNav

const Ul = styled.ul`
    width: 250px;
    height: 780px;
    position: absolute;
    top: 0;
    right: 0;
    display: ${({ open }) => open ? 'block' : 'none'};
    background-color: white;
    padding: 20px 15px;
    border-left: 1px solid whitesmoke;
    user-select: none;

    .nik {
        margin-top: 10px;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: -0.25px;
        color: #262626;
    }

    .nav {
        margin-top: 12px;

        li {
            width: 100%;
            height: 48px;
            list-style: none;
            padding: 12px 0;
            display: flex;
            gap: 12px;
            cursor: pointer;

            .icon {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .text {
                display: flex;
                align-items: center;

                span {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 20px;
                    letter-spacing: -0.25px;
                    color: #262626;
                }
            }
        }

        .settings {
            position: absolute;
            bottom: 20px;
            left: 15px;
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
        }
    }
`;
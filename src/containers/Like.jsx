import React from 'react';
import styled from 'styled-components';
import Controller from '../components/Controller'

const Like = () => {
    return (
        <Wrapper>
            <header>
                <div>Following</div>
                <div>You</div>
            </header>
            <Controller/>
        </Wrapper>
    );
}

export default Like;
const Wrapper = styled.div`
    width: 375px;
    height: 812px;
    background-color: white;
    header{
        display: flex;
        height: 88px;
        padding: 44px 8px 0 8px;
        border-bottom: 1px solid #c7c3c3e3;
        div{
            width: 180px;
            height: 44px;
            text-align: center;
            &:active{
             border-bottom: 1px solid black;
                
            }
        }
    }

`

import styled from 'styled-components';
import InstagramIcon from '../assets/Instagram Logo.svg'
import Avatar from '../assets/avatar1.png'
const Signup = () => {
    return (
        <Wrapper>
            <Container>
                <img className='instagram' src={InstagramIcon} alt="" />
                <img src={Avatar} alt="" />
                <span>jacob_w</span>
                <button>Login</button>
                <span>Switch accounts</span>
                
            </Container>
        </Wrapper>
    );
}

export default Signup;
const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;

`
const Container = styled.div`
    width: 375px;
    height: 812px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .instagram{
        margin-bottom: 52px;
    }
    button{
        width: 307px;        
        height: 44px;
        border-radius: 5px;
        border: none;
        color: white;
        margin: 12px 0 30px 0;
        background: rgba(55, 151, 239, 1);

    }
`

import styled from 'styled-components';
import Controller from '../components/Controller';


const Home = () => {
    return (
        <Wrapper>
            <Container>
                <Controller/>
            </Container>
        </Wrapper>
    );
}

export default Home;
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
    
`

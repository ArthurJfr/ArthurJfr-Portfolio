import styled from "styled-components";
import Link from 'next/link'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsDiscord } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsFillCursorFill } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'


const Navbar = () => {
    return (
        <Container>
            <Navigation>
                <ItemsContainer>
                    <Item>Me</Item>
                    <Item>My work</Item>
                    <Item>Biography</Item>
                    

                </ItemsContainer>
            </Navigation>

            <SocialContainer>
                <Media><BsFillTelephoneFill /></Media>

                <Media><BsDiscord /></Media>

                <Media><BsFillCursorFill /></Media>

                <Media><BsGithub /></Media>

            </SocialContainer>
       </Container>
    )
}

export default Navbar;

const Container = styled.div`
    height : 100%;
    display: flex;
flex-direction: column;
justify-content : space-between;
`;
const Navigation = styled.nav``;
const ItemsContainer = styled.ul`
display: flex;
flex-direction: column;
padding : 1rem;
gap : 1rem;

`;
const Item = styled.li`
    list-style-type : none;
`;
const SocialContainer = styled.div`
padding : 30px;
display : flex;
flex-direction : row;
justify-content : space-around;
`;
const Media = styled.div`
    width : 150px;
    height : 60px;
    padding: 1rem 0.5rem;
    transition : 0.3s;
    &:hover{
        z-index : 4;
        transform : scale(1.2);
    }
`;
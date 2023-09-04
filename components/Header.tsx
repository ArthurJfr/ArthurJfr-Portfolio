import styled from "styled-components";
import { useState } from "react";
import Link from 'next/link';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsDiscord } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsFillCursorFill } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';



const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [display, setDisplay] = useState({ dis :'none'})

    const handleClick = () => {
        setIsActive(!isActive);
        const newDisplay = isActive ? { dis : 'none' } : { dis: 'block' };
        setDisplay(newDisplay);
    }

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
                <Media><BsFillTelephoneFill onClick={handleClick} /></Media>
                <MediaHidden style={{display : `${display.dis}`}}></MediaHidden>

                <Media><BsDiscord onClick={handleClick}  /></Media>
                <MediaHidden style={{display : `${display.dis}`}}></MediaHidden>

                <Media><BsFillCursorFill onClick={handleClick}  /></Media>
                <MediaHidden style={{display : `${display.dis}`}}></MediaHidden>

                <Media><BsLinkedin onClick={handleClick}  /></Media>
                <MediaHidden style={{display : `${display.dis}`}}></MediaHidden>

                <Media><BsGithub onClick={handleClick}  /></Media>
                <MediaHidden style={{display : `${display.dis}`}}></MediaHidden>

            </SocialContainer>
       </Container>
    )
}

export default Header;

const Container = styled.div`
    display: flex;
    background-color : var(--bg-card);
    border : var(--border-card);
    -webkit-box-shadow: 0px 0px 23px 3px #000000; 
    box-shadow: 0px 0px 23px 3px #000000;
    margin: 35px 0 0 35px;
    border-radius : var(--border-rl);
    height : 90%;
    flex-direction: column;
    justify-content : space-between;
`;
const Navigation = styled.nav``;
const ItemsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    padding : 2rem 0 0 2rem;
    gap : 1rem;
`;
const Item = styled.li`
    list-style-type : none;
`;
const SocialContainer = styled.div`
padding : 30px;
padding : 30px 30px 0 30px;
display : flex;
flex-direction : row;
justify-content : space-around;
position : relative;
`;
const Media = styled.div`
    width : 150px;
    height : 60px;
    padding: 1rem 0.5rem;
    transition : 0.3s;
    cursor : pointer;
    &:hover{
        z-index : 4;
        transform : scale(1.2);
    }
`;
const MediaHidden = styled.div`
    
    position : absolute;
    top : -50px;
    border-radius : var(--border-rm);
    border : var(--border-card);
    -webkit-box-shadow: 0px 0px 23px 3px #000000; 
    box-shadow: 0px 0px 23px 3px #000000;
    width : 150px;
    height : 60px;
    z-index : 4;
    background-color : rgba(255,255,255, 0.04);
`;
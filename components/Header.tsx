import styled from "styled-components";
import { useState } from "react";
import Link from 'next/link';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsDiscord } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsFillCursorFill } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';



const Header = () => {


    return (
        <Container>

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


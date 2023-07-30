import styled from "styled-components";
import Link from 'next/link'
import { GoHome } from 'react-icons/go';
import { PiUserCircleThin } from 'react-icons/pi';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { LuSend } from 'react-icons/lu';


const Navbar = () => {
    return (
        <NavContainer>
            <nav>
                <ItemsContainer>
                    {/* HOME */}
                    <Li>
                        <Link href='/'><GoHome size={25} /></Link>
                    </Li>
                    {/* BIOGRAPHY */}
                    <Li>
                        <Link href='/bio'><PiUserCircleThin size={25} /></Link>
                    </Li>
                    {/* WORK */}
                    <Li>
                        <Link href='/'><HiOutlineBookOpen size={25} /></Link>
                    </Li>
                    {/* CONTACT */}
                    <Li>
                        <Link href='/'><LuSend size={22} /></Link>
                    </Li>
                </ItemsContainer>
                <div className="bar"></div>
            </nav>
            

            
        </NavContainer>
    )
}

export default Navbar;

const NavContainer = styled.div`
    position : fixed;
    bottom : 35px;
    display : flex;
    justify-content : center;
    z-index : 10;
    width : 100%;
    nav {
        display : flex;
        flex-direction : column;
    }
    .bar {
        width : 325px;
        border-radius : 100px;
        height : 7px;
        border : none;
        background-color : #FFF;
        transition : 500ms;
        &:hover {
            transform : translateY(20px);
        }
    }
    
`;
const ItemsContainer = styled.ul`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
    margin 0;
    padding-inline-start: 0;
    padding-left : 25px;
    padding-right : 25px;
    list-style : none;

`;
const Li = styled.li`
    a{
        text-decoration: none;
        color: #FFF;
        text-align : center;
    }
`;


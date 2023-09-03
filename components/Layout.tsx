import ModeButton from "./ModeButton";
import Navbar from "./Navbar";
import styled from "styled-components";



const Layout = () => {
    return (
        <Container>
           <Navbar />
        </Container>
    )
}

export default Layout;

const Container = styled.div`
width : 250px;
background-color : #171717;
`;
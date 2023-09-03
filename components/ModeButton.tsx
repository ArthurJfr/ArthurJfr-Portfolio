import styled from "styled-components"
import { useState } from "react";
import { createGlobalStyle } from "styled-components";



const ModeButton = () => {

   

    const [isActive, setIsActive] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [circlePosition, setCirclePosition] = useState({ x: 0 });


    const handleClick = () => {
        setIsActive(!isActive);
        const newPosition = isActive ? { x: 0 } : { x: 16 };
        setCirclePosition(newPosition);
        

        setIsDark(!isDark);
        const BgColor = isDark ? 'white' : 'black';
        console.log(isDark)
        const Body = document.querySelector('body');
        
        
 
    }
 
    return (
        <ButtonContainer>
            
            <Toggle onClick={handleClick}>
                <Circle style={{transform : `translateX(${circlePosition.x}px)`}}></Circle>
            </Toggle>
        </ButtonContainer>
    )
}

export default ModeButton;

const ButtonContainer = styled.div`

`;
const Toggle = styled.div`
    width : 38px;
    margin: 20px;
    height : 20px;
    border : solid 1px black;
    border-radius : 1000px;
    position : relative;
`;
       const Circle = styled.div`
    position : absolute;
    background-color : black;
    width : 16px;
    height: 16px;
    border-radius : 50%;
    top : 2px;
    left : 3px;
    transition : 0.5s;
`;

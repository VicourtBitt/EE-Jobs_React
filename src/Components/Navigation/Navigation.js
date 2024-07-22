import styled from "styled-components";
import { useState } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";

const NavigationBox = styled.div`
    width: 500px;
    height: 60px;

    @media (max-width: 575.8px) {
        width: 100px;
    }
`

const NavigationContent = styled.ul`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;

    @media (max-width: 575.8px) {
        display: block;
        align-items: center;
        position: relative;
        top: 65%;
        width: 100px;
        height: 300px;
        flex-direction: column;
        flex-wrap: wrap;
    }
`

const DropBtn = styled.button`
    display: none;
    cursor: pointer;
    height: 60px;
    line-height: 60px;
    width: 100px;
    text-align: center;
    font-size: 42px;
    font-weight: 600;
    background: none;
    border: none;
    border-radius: 15px;
    transition: 500ms;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 5px black;
    }

    @media (max-width: 575.8px) {
        display: block;
    }
`

function Navigation() {
    const [dropDown, setDropDown] = useState(true)
    return (
        <NavigationBox>
            <DropBtn
            onClick={() => setDropDown(!dropDown)}
            id="btnDropDown">
                ≡
            </DropBtn>
            {   
                dropDown &&
                <NavigationContent>
                    <NavigationBar />
                </NavigationContent>
            }   
        </NavigationBox>
    )
}

export default Navigation;
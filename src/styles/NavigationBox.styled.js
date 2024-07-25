import styled from "styled-components";

const NavigationBox = styled.ul`
    border: 1px solid black;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    width: 400px;
    height: 80px;

    @media (max-width: 767.8px) {
        display: none;
    }
`

export default NavigationBox;
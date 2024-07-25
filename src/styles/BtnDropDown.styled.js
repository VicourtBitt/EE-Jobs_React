import styled from "styled-components";

const BtnNavDropDown = styled.button`
    display: none;
    width: 100px;
    height: 60px;
    line-height: 60px;
    background: none;
    font-size: 40px;
    transition: 500ms;
    border-radius: 10px;
    border: 2px solid var(--first-auxiliar);

    &:hover{
        transform: scale(1.1);
        box-shadow: 0px 0px 10px #000;
    }

    @media (max-width: 767.8px) {
        display: block;
    }
` 

export default BtnNavDropDown;
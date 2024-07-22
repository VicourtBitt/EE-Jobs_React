import styled from "styled-components";

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

// ≡
export default DropBtn;
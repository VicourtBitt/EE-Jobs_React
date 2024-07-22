import styled from "styled-components";

const ItemButton = styled.button`
    cursor: pointer;
    display: block;
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    border-radius: 30px;
    transition: 500ms;

    &:hover {
        transform: scale(1.1);
    }
` 

export default ItemButton;
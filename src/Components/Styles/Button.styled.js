import styled from "styled-components";

const Button = styled.button`
    width: ${(props) => props.w || "200px"};
    background: ${(props) => props.bg || "#007BFF"};
    font-size: ${(props) => props.fontSize || "22px"};
    color: ${(props) => props.color || "#FFF"};
    height: 50px;
    line-height: 50px;
    border: none;
    border-radius: 10px;
    transition: 500ms;

    &:hover{
        transform: scale(1.05);
        box-shadow: 0 0 10px #000;
        opacity: 0.85;
    }
`

export default Button;
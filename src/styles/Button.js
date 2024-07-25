import styled from "styled-components";

const Button = styled.button`
    background: ${(props) => props.bg || "var(--light)"};
    height: ${(props) => props.height || "60px"};
    width: ${(props) => props.width || "220px"};
    line-height ${(props) => props.height || "60px"};
    border-radius: 10px;
    border: none;
    transition: 500ms;

    &:hover {
        cursor: pointer;
        font-size: 16px;
        transform: scale(1.1);
    }
`

export default Button;
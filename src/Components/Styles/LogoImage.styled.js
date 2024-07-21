import styled from "styled-components";

export const LogoImage = styled.img`
    cursor: pointer;
    height: 120px;
    width: auto;
    transition: 500ms;

    &:hover {
        opacity: 0.9;
        transform: scale(0.95);
    }
`

export default LogoImage;
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

    @media (max-width: 575.8px) {
        height: 110px;
        &:hover {
            transform: scale(1.1);
        }
    }

    @media (min-width: 576px) and (max-width: 767.8px) {
        height: 90px;
    }
`

export default LogoImage;
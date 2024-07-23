import styled from "styled-components";

const StyledImage = styled.img`
    width: auto;
    max-height: 330px;
    transition: 500ms;

    &:hover{
        transform: scale(1.05);
    }

    @media (max-width: 575.8px) {
        max-height: 330px;
        height: auto;
        width: auto;
    }

    @media (min-width: 1024px) and (max-width: 1439.8px) {
    }

    @media (min-width: 1440px) {
        width: auto;
    }
`

export default StyledImage;
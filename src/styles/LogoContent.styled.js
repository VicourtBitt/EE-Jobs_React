import styled from "styled-components";

const LogoContent = styled.div`
    height: ${(props) => props.height || "120px"};
    width: ${(props) => props.width || "220px"};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    transition: 500ms;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }

    @media (max-width: 575.8px) {
        width: 165px;
    }
`

export default LogoContent;
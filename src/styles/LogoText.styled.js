import styled from "styled-components";

const LogoText = styled.span`
    text-align: center;
    font-weight: 600;
    font-size: 28px;
    line-height: 40px
    height: 40px;
    width: 60px;

    @media (max-width: 575.8px) {
        height: 30px;
        line-height: 30px;
        width: 45px;
        font-size: 22px;
    }
`

export default LogoText;
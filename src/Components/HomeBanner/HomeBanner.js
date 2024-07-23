import styled from "styled-components";

const HomeBannerBox = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(props) => props.h || "400px"};
    background: #FFF;

    @media (max-width: 575.8px) {
        height: ${(props) => props.smHeight || "760px"}
    }
`

export default HomeBannerBox;
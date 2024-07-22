import styled from "styled-components";

const HomeBannerBox = styled.article`
    display: flex;
    border: 1px solid red;
    justify-content: center;
    align-items: center;
    height: ${(props) => props.h || "400px"};
    background: #FFF;
`

export default HomeBannerBox;
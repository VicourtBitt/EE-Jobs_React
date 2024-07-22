import styled from "styled-components";

const HomeMainBox = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(props) => props.h || "400px"};
    background: #6C757D;
`

export default HomeMainBox;
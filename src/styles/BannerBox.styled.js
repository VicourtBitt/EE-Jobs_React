import styled from "styled-components";

const BannerBox = styled.div`
    max-width: 1080px;
    width: ${(props) => props.width || "80%"};
    height: 95%;
    border: 1px solid black;
`

export default BannerBox;
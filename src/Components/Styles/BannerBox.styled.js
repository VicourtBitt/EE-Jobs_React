import styled from "styled-components";

const BannerBox = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: ${(props) => props.flexD || "row"};
    width: ${(props) => props.w || "80%"};
    height: 95%;

    @media (max-width: 575.8px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export default BannerBox;
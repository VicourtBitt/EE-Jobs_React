import styled from "styled-components";

const BtnBox = styled.div`
    width: ${(props) => props.w || "90%"};
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction; ${(props) => props.flexD || "row"};
    height: 60px;

    @media (max-width: 575.8px) {
        flex-direction: row;
        flex-wrap: wrap;
        height: 120px;
    }
`

export default BtnBox;
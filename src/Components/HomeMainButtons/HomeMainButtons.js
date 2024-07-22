import styled from "styled-components";

const BtnBox = styled.div`
    width: ${(props) => props.w || "90%"};
    display: flex;
    justify-content: space-around;
    flex-direction; ${(props) => props.flexD || "row"};
    height: 60px;
`

export default BtnBox;
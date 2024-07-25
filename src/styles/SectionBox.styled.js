import styled from "styled-components";

const SectionBox = styled.section`
    display: flex;
    flex-direction: ${(props) => props.flexD || "row"};
    justify-content: space-around;
    align-items: center;
    height: ${(props) => props.height || "100px"};
    width: ${(props) => props.width || "50%"};
    border: 1px solid purple;
`

export default SectionBox;
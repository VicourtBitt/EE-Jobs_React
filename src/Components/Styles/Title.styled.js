import styled from "styled-components";

const TextTitle = styled.h1`
    font-size: ${(props) => props.fontSize || "42px"};
    font-weight: 500;
    padding: 0 10px;
    color: ${(props) => props.fontColor || "#FFF"};
`

export default TextTitle;
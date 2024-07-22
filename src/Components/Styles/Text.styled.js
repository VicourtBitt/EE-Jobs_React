import styled from "styled-components";

const TextContent = styled.p`
    font-size: ${(props) => props.fontSize || "18px"};
    color: ${(props) => props.fontColor || "#FFF"};
    text-align: justify;
    line-height: 24px;
`

export default TextContent;
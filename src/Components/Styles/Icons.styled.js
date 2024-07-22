import styled from "styled-components";

const Icon = styled.i`
    width: ${(props) => props.w || "40px"};
    height: ${(props) => props.h || "40px"};
    padding: 10px;
    box-sizing: border-box;
    color: #FFF;
    font-size: 20px;
`

export default Icon;
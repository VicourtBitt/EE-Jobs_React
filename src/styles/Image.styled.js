import styled from "styled-components";

const ImageBox = styled.img`
    height: ${(props) => props.imageHeight || "100%"};
    width: ${(props) => props.imageWidth || "auto"};
`

export default ImageBox;
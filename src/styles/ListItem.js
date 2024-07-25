import styled from "styled-components";

const ListItem = styled.li`
    height: ${(props) => props.height || "60px"};
    width: ${(props) => props.width || "19.5%"};
`

export default ListItem;
import styled from "styled-components";

const ListItem = styled.li`
    display: inline-block;
    width: 19.8%;
    height: 60px;
    line-height: 60px;

    @media (max-width: 575.8px) {
        display: block;
        width: 90px;
    }
`

export default ListItem;
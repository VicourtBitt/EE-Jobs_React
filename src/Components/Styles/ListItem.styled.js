import styled from "styled-components";

const ListItem = styled.li`
    display: inline-block;
    width: 19.8%;
    height: 60px;
    line-height: 60px;

    @media (max-width: 575.8px) {
        display: block;
        background: #c6c6c6;
        border: 1px solid black;
        border-radius: 10px;
        width: 100px;
    }
`

export default ListItem;
import styled from "styled-components";

const ListItem = styled.li`
    display: inline-block;
    width: 19.8%;
    height: 60px;
    line-height: 60px;
    transition: 500ms;

    &:hover {
        transform: scale(1.15);
        opacity: 0.9;
    }

    @media (max-width: 575.8px) {
        display: block;
        background: #6C757D;
        border: 1px solid black;
        border-radius: 10px;
        width: 100px;
    }
`

export default ListItem;
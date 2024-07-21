import styled from "styled-components";
import ListItem from "../Styles/ListItem.styled";
import ItemButton from "../Styles/ListButton.styled";

const NavigationContent = styled.ul`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;

    @media (max-width: 575.8px) {
        display: none;
        align-items: center;
        position: relative;
        top: 65%;
        width: 100px;
        height: 300px;
        background: #c6c6c6;
        flex-direction: column;
        flex-wrap: wrap;
    }
`

const eachBtnInfo = [
    {btnName: "HOME", btnId: "navHome"},
    {btnName: "CONTATO", btnId: "navContact"},
    {btnName: "PERFIS", btnId: "navResumes"},
    {btnName: "APOIO", btnId: "navPartners"},
    {btnName: "SOBRE", btnId: "navAbout"}
]

function NavigationBar() {
    return (
        <NavigationContent>
            {eachBtnInfo.map((elem) => (
                <ListItem>
                    <ItemButton id={elem.btnId}>{elem.btnName}</ItemButton>
                </ListItem>
            ))}
        </NavigationContent>
    )
}

export default NavigationBar;
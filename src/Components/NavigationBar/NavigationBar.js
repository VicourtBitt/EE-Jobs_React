import ListItem from "../Styles/ListItem.styled";
import ItemButton from "../Styles/ListButton.styled";

const eachBtnInfo = [
    {btnName: "HOME", btnId: "navHome"},
    {btnName: "CONTATO", btnId: "navContact"},
    {btnName: "PERFIS", btnId: "navResumes"},
    {btnName: "APOIO", btnId: "navPartners"},
    {btnName: "SOBRE", btnId: "navAbout"}
]

function NavigationBar() {
    return (
            eachBtnInfo.map((elem) => (
                <ListItem>
                    <ItemButton id={elem.btnId} key={elem.btnId}>{elem.btnName}</ItemButton>
                </ListItem>
            ))
    )
}

export default NavigationBar;
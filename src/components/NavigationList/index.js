import NavigationBox from "../../styles/NavigationBox.styled";
import ListItem from "../../styles/ListItem";
import Button from "../../styles/Button";
import sendTo from "../../view/SendTo";

const navigationButtons = [
    { name: "HOME", key: "home", id: "homeButton" },
    { name: "CONTATO", key: "contact", id: "contactButton" },
    { name: "PERFIS", key: "profiles", id: "profilesButton" },
    { name: "APOIO", key: "partners", id: "partnersButton" },
    { name: "SOBRE", key: "about", id: "aboutButton" }
]
    
function NavigationList () {
    return (
        <NavigationBox>
            {navigationButtons.map((button) => (
                <ListItem>
                    <Button
                        bg= "none"
                        width= "100%"
                        id={button.id}
                        key={button.key}
                    >
                        {button.name}
                    </Button>
                </ListItem>
            ))}
        </NavigationBox>
    )
}

export default NavigationList;
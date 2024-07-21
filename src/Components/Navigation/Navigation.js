import styled from "styled-components";
import NavigationBar from "../NavigationBar/NavigationBar";
import NavigationDropBtn from "../NavigationDropBtn/NavigationDropBtn";

const NavigationBox = styled.div`
    width: 500px;
    height: 60px;

    @media (max-width: 575.8px) {
        width: 100px;
    }
`

// function dropDown() {
    
// }

function Navigation() {
    return (
        <NavigationBox>
            <NavigationDropBtn />
            <NavigationBar />
        </NavigationBox>
    )
}

export default Navigation;
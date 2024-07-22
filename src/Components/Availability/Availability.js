import styled from "styled-components";
import StyledSpan from "../Styles/SimpleText.styled";
import Icon from "../Styles/Icons.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";

const AvailabilityBox = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
`

function Availability() {
    return (
        <AvailabilityBox>
            <StyledSpan>
                Disponível para:
                <Icon>
                    <FontAwesomeIcon icon={faApple} />
                </Icon>

                <Icon>
                    <FontAwesomeIcon icon={faAndroid} />
                </Icon>
            </StyledSpan>
        </AvailabilityBox>
    )
}

export default Availability;
import styled from "styled-components";
import OldMan from "../../assets/images/obj_elderly_man.webp"
import StyledImage from "../Styles/Images.styled";

const HomeMainImageBox = styled.div`
    max-width: 580px;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767.8px) {
        display: none;
    }
`

function HomeMainImage() {
    return (
        <HomeMainImageBox>
            <StyledImage 
                src={OldMan}
                alt="Idoso usando um computador."
            />
        </HomeMainImageBox>
    )
}

export default HomeMainImage;
import styled from "styled-components";
import StyledImage from "../Styles/Images.styled";
import ResumeImg from "../../assets/images/obj_curriculum.png"

const BannerImageBox = styled.div`
    max-width: 580px;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 575.8px) {
        width: 100%;
        height: 50%;
    }

    @media  (max-width: 767.8px) {
        width: 40%;
    }
`

function BannerImage(){
    return (
        <BannerImageBox>
            <StyledImage 
                src={ResumeImg}
                alt="Imagem de um currículo"
            />
        </BannerImageBox>
    )
}

export default BannerImage;
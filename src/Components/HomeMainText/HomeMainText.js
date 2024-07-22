import styled from "styled-components";
import TextContent from "../Styles/Text.styled";
import TextTitle from "../Styles/Title.styled";
import BtnBox from "../HomeMainButtons/HomeMainButtons";
import Button from "../Styles/Button.styled";
import Availability from "../Availability/Availability";

const HomeMainTextBox = styled.div`
    max-width: 720px;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 767.8px) {
        width: 100%
    }
`

function HomeMainText () {
    return (
        <HomeMainTextBox>
            <TextTitle>Suas experiências valorizadas</TextTitle>
            <TextContent>
                Ferramenta de realocação dos mais experiêntes do mercado. Aqui, valorizamos
                seus conhecimentos acima de tudo! Volte ao ápice, venha com e.e-jobs! Entre
                em contato abaixo.
            </TextContent>
            <BtnBox>
                <Button
                    w=""
                    >
                    Cadastre-se Hoje!
                </Button>

                <Button
                    w="220px"
                    color="#000"
                    bg="#FFC107"
                    >
                    Já Tenho Cadastro
                </Button>
            </BtnBox>
            <Availability />
        </HomeMainTextBox>
    )  
}

export default HomeMainText;
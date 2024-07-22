import styled from "styled-components"
import TextContent from "../Styles/Text.styled"
import TextTitle from "../Styles/Title.styled"
import BtnBox from "../HomeMainButtons/HomeMainButtons"
import Button from "../Styles/Button.styled"

const BannerTextBox = styled.div`
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

function BannerText() {
    return (
        <BannerTextBox>
            <TextTitle
                fontColor="#000"
            >
                Mostre as suas capacitações
            </TextTitle>
            <TextContent
                fontColor="#000"
            >
                Envie o seu currículo para as diversas empresas parceiras do nosso
                programa. Ás vezes, o que elas mais precisam é de alguém com bastante
                experiência!
            </TextContent>
            <BtnBox>
                <Button
                    w="150px"
                    bg="#17A2B8"
                >
                    Saiba mais...
                </Button>
            </BtnBox>
        </BannerTextBox>
    )
}

export default BannerText;
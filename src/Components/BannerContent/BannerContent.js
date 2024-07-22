import styled from "styled-components";
import BannerBox from "../Styles/BannerBox.styled";
import BannerText from "../BannerText/BannerText";
import BannerImage from "../BannerImage/BannerImage";

function BannerContent() {
    return (
        <BannerBox
            flexD="row-reverse"
            w=""
        >
            <BannerText />
            <BannerImage />
        </BannerBox>
    )
}

export default BannerContent;
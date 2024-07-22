import styled from "styled-components";
import BannerBox from "../Styles/BannerBox.styled";
import HomeMainText from "../HomeMainText/HomeMainText";
import HomeMainImage from "../HomeMainImage/HomeMainImage";

function BannerMainContent({flexD, w}) {
    return (
        <BannerBox
            flexD={flexD}
            w={w}
        >
                <HomeMainText/>
                <HomeMainImage />
        </BannerBox>
    )
}

export default BannerMainContent;
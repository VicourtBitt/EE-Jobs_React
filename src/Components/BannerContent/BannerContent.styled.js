import styled from "styled-components";
import HomeMainText from "../HomeMainText/HomeMainText";
import HomeMainImage from "../HomeMainImage/HomeMainImage";

const BannerBox = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: ${(props) => props.flexD || "row"};
    width: ${(props) => props.w || "80%"};
    height: 95%;
`

function BannerContent({flexD, w}) {
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

export default BannerContent;
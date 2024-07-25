import styled from "styled-components";
import ImageBox from "../../styles/Image.styled";

const BannerImageBox = styled.div`
    width: ${(props) => props.width || "50%"};
    border: 1px solid purple;
`

function BannerImage ({logo, widthBanner, imageHeight, imageWidth}) {
    return (
        <BannerImageBox
            width={widthBanner}
        >
            <ImageBox
                imageHeight={imageHeight}
                imageWidth={imageWidth}
            >
                {logo}
            </ImageBox>            
        </BannerImageBox>
    )  
}

export default BannerImage;
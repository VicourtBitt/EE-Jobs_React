import styled from "styled-components";
import BannerContent from "../../components/BannerContent";

const PageContentBox = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${(props) => props.height || "400px"};
    background: ${(props) => props.bg || "#FFF"};
    border: 1px solid blue;
`

function PageContent ({children, bg, height}) {
    return (
        <PageContentBox
            bg={bg}
            height={height}
        >
            <BannerContent>
                {children}
            </BannerContent>
        </PageContentBox>
    )
}

export default PageContent;
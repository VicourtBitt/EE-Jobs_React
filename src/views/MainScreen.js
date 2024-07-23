import HomeMainBox from "../Components/HomeMainBanner/HomeMainBanner";
import HomeBannerBox from "../Components/HomeBanner/HomeBanner";
import BannerMainContent from "../Components/BannerMainContent/BannerMainContent";
import BannerContent from "../Components/BannerContent/BannerContent";

function MainScreen(){
    return (
        <>
            <HomeMainBox>
                <BannerMainContent
                    flexD=""
                    w=""
                />
            </HomeMainBox>

            <HomeBannerBox>
                <BannerContent
                        flexD="row-reverse"
                        w="600px"
                    />
            </HomeBannerBox>
        </>
    )
}

export default MainScreen;
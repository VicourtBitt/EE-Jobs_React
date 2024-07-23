import styled from "styled-components";
import Header from "../Components/Header/Header";

const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
    min-width: 410px;
`

function BodyDefault({children}) {
    return (
        <AppContainer>
			<Header />
				
            <main>
                <>{children}</>
            </main>

			<footer />
		</AppContainer>
    )
}
export default BodyDefault;
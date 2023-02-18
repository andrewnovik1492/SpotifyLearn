import NavigationPannel from "../components/NavigationPannel";
import MainInfo from "../components/MainInfo";
import Player from "../components/Player";
import FlexContainer from "../components/styled/FlexContainer";


function MainPage() {
    return(
        <FlexContainer align='flex-start' direction='column'>
            <FlexContainer justify='flex-start'>
                <NavigationPannel/>
                <MainInfo/>
            </FlexContainer>
            <Player/>
        </FlexContainer>
    )
}
export default MainPage
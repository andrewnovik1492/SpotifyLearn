import NavigationPannel from "../components/NavigationPannel";
import Player from "../components/Player";
import FlexContainer from "../components/styled/FlexContainer";
import { Outlet } from "react-router-dom";


function MainPage() {
    return(
        <FlexContainer align='flex-start' direction='column'>
            <FlexContainer justify='flex-start'>
                <NavigationPannel/>
                <Outlet/>
            </FlexContainer>
            <Player/>
        </FlexContainer>
    )
}
export default MainPage
import styled from 'styled-components'
import Button from '../components/Button'
import FlexContainer from '../components/styled/FlexContainer'

function LoginPage() {
    const authorize = () => {
        const clientId = '4b0176ef94c14b82af11ef2f43e7d7f4';
        const redirectURL = 'http://localhost:3000';
        const apiURL = 'https://accounts.spotify.com/authorize'
        const scopes = ['user-read-email', 'user-read-private', 'user-read-playback-state', 'user-modify-playback-state', 'user-read-currently-playing', 'user-read-playback-position', 'user-top-read', 'user-read-recently-played']
        window.location.href = `${apiURL}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join(' ')}&response_type=token&show_dialog=true`
    }

    return(
        <LoginContainer>
            <FlexContainer direction='column' >
                <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt='LogoSpotify'/>
                <Button click={authorize}>Connect to spotify</Button>
            </FlexContainer>
        </LoginContainer>
    )
}

const LoginContainer = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: green;
    img {
        width: 500px;
        
    }
`
export default LoginPage
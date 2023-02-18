import { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import './styles/styles.scss'

function App() {
  const [authToken, setAuthToken] = useState(false);

  useEffect(() => {
    if(window.location.hash.includes('access_token')) {
      const token = window.location.hash.split('&')[0].split('=')[1];
      localStorage.setItem('token', token);
      setAuthToken(token);
    } else {
      setAuthToken(localStorage.getItem('token'))
    }

  }, [])

  return (
    <div className="App">
      {
        authToken ? <MainPage/> : <LoginPage/>
      }
    </div>
  );
}

export default App;

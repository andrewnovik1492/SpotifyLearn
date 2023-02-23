import { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import './styles/styles.scss'
import { Routes, Route, useNavigate } from "react-router-dom";
import SelectedPlayList from "./pages/SelectedPlayList";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if(window.location.hash.includes('access_token')) {
      const token = window.location.hash.split('&')[0].split('=')[1];
      localStorage.setItem('token', token);
    } else if (!localStorage.getItem('token')) {
      navigate('/login')
    }

  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}>
          <Route path='search' element={<h1>Search Page</h1>}/>
          <Route path='library' element={<h1>Library Page</h1>}/>
          <Route path='create' element={<h1>Create Page</h1>}/>
          <Route path='liked' element={<h1>Liked Page</h1>}/>
          <Route path='playlist/:id' element={<SelectedPlayList/>}/>
        </Route>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

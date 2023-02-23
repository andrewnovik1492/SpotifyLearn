import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../styles/selectedPlaylist.scss';
import RandomColor from '../components/RandomColor';
import BaseLink from "../components/BaseLink";

const SelectedPlayList = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [playListItem, setPlayListItem] = useState({});
    useEffect(() => {
        fetch(`https://api.spotify.com/v1/playlists/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => response.json())
        .then((res) => {
            setPlayListItem(res)
        })

    }, [id])
    const backgroundPlaylistColor = {
        'background-color': RandomColor()
    }

    return (
        playListItem.id && (<div style={backgroundPlaylistColor} className="playlist-selected">
            <div className="button-container">
                <button onClick={() => navigate(-1)}>
                    <svg width="30px" height="30px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003" transform="matrix(-1, 0, 0, 1, 0, 0)">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ffffff" stroke-width="0.048"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM14.79 12.53L11.26 16.06C11.11 16.21 10.92 16.28 10.73 16.28C10.54 16.28 10.35 16.21 10.2 16.06C9.91 15.77 9.91 15.29 10.2 15L13.2 12L10.2 9C9.91 8.71 9.91 8.23 10.2 7.94C10.49 7.65 10.97 7.65 11.26 7.94L14.79 11.47C15.09 11.76 15.09 12.24 14.79 12.53Z" fill="#525456"/> </g>
                    </svg>
                </button>
                <button className="next-button" onClick={() => navigate(1)}>
                    <svg width="30px" height="30px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003" transform="matrix(1, 0, 0, 1, 0, 0)">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ffffff" stroke-width="0.048"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM14.79 12.53L11.26 16.06C11.11 16.21 10.92 16.28 10.73 16.28C10.54 16.28 10.35 16.21 10.2 16.06C9.91 15.77 9.91 15.29 10.2 15L13.2 12L10.2 9C9.91 8.71 9.91 8.23 10.2 7.94C10.49 7.65 10.97 7.65 11.26 7.94L14.79 11.47C15.09 11.76 15.09 12.24 14.79 12.53Z" fill="#525456"/> </g>
                    </svg>
                </button>
            </div>
            <header>
                <img src={playListItem.images[0].url} alt='playlistphoto'/>
                <div className="playlist-info">
                    <p>
                        {
                            playListItem.public ? "Открытый плейлист" : "Закрытый плейлист"
                        }
                    </p>
                    <h1>
                        {
                            playListItem.name
                        }
                    </h1>
                    <p>
                        {
                            playListItem.description || "Нет описания"
                        }
                    </p>
                    <p>
                        {
                            playListItem.owner.display_name
                        }
                    </p>
                    <p>
                        {
                            playListItem.tracks.total
                        }
                    </p>
                    <p>
                        {
                            playListItem.tracks.items.map((item) => item.track.duration_ms).reduce((prev, curr) => (prev + curr),0)/60000
                        }
                    </p>
                </div>
            </header>
            <div className="track-container">
                <div className="button-container">
                    <button>
                        <svg width="40px" height="40px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#37ff00">
                            <g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(5.3999999999999995,5.3999999999999995), scale(0.55)">
                            <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#000000" strokewidth="0"/>
                            </g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM9 17L16.8571 12L9 7V17Z" fill="#00ff2a"/> </g>
                        </svg>
                    </button>
                    <button>
                        <svg fill="#1eff00" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#1eff00">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier">
                            <path d="M26.996 12.898c-.064-2.207-1.084-4.021-2.527-5.13-1.856-1.428-4.415-1.69-6.542-.132-.702.516-1.359 1.23-1.927 2.168-.568-.938-1.224-1.652-1.927-2.167-2.127-1.559-4.685-1.297-6.542.132-1.444 1.109-2.463 2.923-2.527 5.13-.035 1.172.145 2.48.788 3.803 1.01 2.077 5.755 6.695 10.171 10.683l.035.038.002-.002.002.002.036-.038c4.415-3.987 9.159-8.605 10.17-10.683.644-1.323.822-2.632.788-3.804z"/>
                            </g>
                        </svg>
                    </button>
                    <button>
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M8 12L12 16M12 16L16 12M12 16V8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#cfcece" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
                        </svg>
                    </button>
                </div>
                <div>
                     
                </div>
            </div>
        </div>
        )
    )
}

export default SelectedPlayList
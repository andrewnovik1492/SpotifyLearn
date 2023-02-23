import { useEffect, useState} from "react";
import BaseLink from "./BaseLink";
import NavigationBox from "./styled/NavigationBox";
import {ReactSVG} from "react-svg";
import homelogo from "./SVGimages/home.svg";
import searchlogo from "./SVGimages/search.svg";
import mediaLibrary from "./SVGimages/mediaLibrary.svg";
import plus from "./SVGimages/plus.svg";
import like from "./SVGimages/like.svg";


const NavigationPannel = () => {
    const [playList, setPlayList] = useState([])
    useEffect(() => {
        fetch('https://api.spotify.com/v1/me/playlists', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => response.json())
        .then((res) => {
            setPlayList(res.items)
        })

    }, [])
    
    return(
        
        <section className="navigation">
            
                <nav>
                <NavigationBox>
                    <div className="home-logo">
                        <ReactSVG src={homelogo}/>
                        <BaseLink path='/'>Main</BaseLink>
                    </div>
                    <div className="search-logo">
                        <ReactSVG src={searchlogo}/>
                        <BaseLink path='/search'>Search</BaseLink>   
                    </div>
                    <div className="media-logo">
                        <ReactSVG src={mediaLibrary}/>
                        <BaseLink path='/library'>Media Library</BaseLink>
                    </div>
                </NavigationBox>
                <NavigationBox>
                    <div className="plus-logo">
                        <ReactSVG src={plus}/>
                        <BaseLink path="/create">Create Playlist</BaseLink>
                    </div>
                    <div className="like-logo">
                        <ReactSVG src={like}/>
                        <BaseLink path='/liked'>Like songs</BaseLink>
                    </div>
                </NavigationBox>
                    
                
                </nav>
            <div className="playlist-container">
                {
                    playList && playList.map((item) => {
                        return(
                            
                                <BaseLink path={`/playlist/${item.id}`}  key={item.id}>
                                {item.name}
                                </BaseLink>
                            
                            
                        )
                    })
                }
            </div>
        </section>
    )
}

export default NavigationPannel
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
    function handleClick(e) {
        console.log(e.target.innerText) ;
        
        
      }
    return(
        
        <section className="navigation">
            
                <nav>
                <NavigationBox>
                    <div className="home-logo">
                        <ReactSVG src={homelogo}/>
                        <BaseLink>Main</BaseLink>
                    </div>
                    <div className="search-logo">
                        <ReactSVG src={searchlogo}/>
                        <BaseLink>Search</BaseLink>   
                    </div>
                    <div className="media-logo">
                        <ReactSVG src={mediaLibrary}/>
                        <BaseLink>Media Library</BaseLink>
                    </div>
                </NavigationBox>
                <NavigationBox>
                    <div className="plus-logo">
                        <ReactSVG src={plus}/>
                        <BaseLink>Create Playlist</BaseLink>
                    </div>
                    <div className="like-logo">
                        <ReactSVG src={like}/>
                        <BaseLink>Like songs</BaseLink>
                    </div>
                </NavigationBox>
                    
                
                </nav>
            <div onClick={handleClick}  className="playlist-container">
                {
                    playList.map((item) => {
                        return(
                            
                                <BaseLink  key={item.id}>
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
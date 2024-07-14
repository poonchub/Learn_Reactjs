import {useState} from 'react';
import "./App.css";
import AnimeItem from "./components/AnimeItem";
import AppHeader from "./components/AppHeader";
import ItemPopup from "./components/ItemPopup";
import animes from "./data/animes";
import AppSearch from './components/AppSearch';


function App() {
    const [selectedAnime, setSelectedAnime] = useState(null);
    const [searchText, setSearchText] = useState("");

    function animeOnClick(theAnime){
        setSelectedAnime(theAnime);
    }

    function popupClose(){
        setSelectedAnime(null);
    }

    const filteredAnime = animes.filter((anime) => {
        return anime.title.includes(searchText);
    });
    const animeElements = filteredAnime.map((anime, index) => {
        return <AnimeItem key={index} anime={anime} animeOnClick={animeOnClick}/>;
    });

    

    let itemPopup = null;
    if (!!selectedAnime) {
        itemPopup = <ItemPopup anime={selectedAnime} popupClose={popupClose}/>
    }

    return (
        <div className="App">
            <AppHeader/>
            <section className="app-section">
                <div className="app-container">
                    <AppSearch value={searchText} onValueChange={setSearchText}/>
                    <div className="app-grid">
                        {animeElements}
                    </div>
                </div>
            </section>
            {itemPopup}
        </div>
    );
}

export default App;

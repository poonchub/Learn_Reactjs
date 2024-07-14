import './../css/AnimeItem.css';

function AnimeItem(props) {
    const {anime, animeOnClick} = props;

    return (
        <div className="anime-item">
            <img src={anime.thumbnailUrl} onClick={() => animeOnClick(anime)}/>
            <h4>{anime.title}</h4>
        </div>
    );
}

export default AnimeItem;
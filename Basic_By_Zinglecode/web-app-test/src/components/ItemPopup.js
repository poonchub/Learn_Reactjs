import './../css/ItemPopup.css';

function ItemPopup(props){
    const {anime, popupClose} = props;
    return (
        <div className="item-popup">
            <div className="item-popup-bg" onClick={popupClose}></div>
            <div className="item-popup-content">
                <img src={anime.thumbnailUrl}/>
                <h4>{anime.title}</h4>
            </div>
        </div>
    );
}

export default ItemPopup;
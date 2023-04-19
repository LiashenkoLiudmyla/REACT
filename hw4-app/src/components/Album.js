import withToggler from "../HOCs/withToggler";


const Album = ({title, thumbnailUrl, toggled, changeToggle}) => {
    return (
        <div>
            <h4>
                <span>Album: {title}</span>
                <div>
                    <img src={thumbnailUrl} alt="pict" />
                </div>

                    <button onClick={changeToggle}>{toggled ? (
                    
                    <img className="img_btn_like" src="../picture/like.png" alt="like" /> ) : (
                    
                    <img className="img_btn_like" src="../picture/dislike.svg" alt="dislike" />
                )}  
                </button>
            </h4>
        </div>
    );
};

export default withToggler(Album)
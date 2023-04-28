import { useToggle } from "../hooks/useToggler";

const AlbumHook = ({ title, thumbnailUrl }) => {
  const [isLiked, setLiked] = useToggle(true);
  return (
    <div>
      <h4>
        <span>Album: {title}</span>
        <div>
          <img src={thumbnailUrl} alt="pict" />
        </div>

        <button onClick={setLiked}>
          {isLiked ? (
            <img
              className="img_btn_like"
              src="../picture/like.png"
              alt="like"
            />
          ) : (
            <img
              className="img_btn_like"
              src="../picture/dislike.svg"
              alt="dislike"
            />
          )}
        </button>
      </h4>
    </div>
  );
};

export default AlbumHook;

import imgFront from "../picture/front.png";
import imgBack from "../picture/back.png";
import plus from "../picture/plus.png";
import UserCardList from "../Components/UserCardList"
import { useToggle } from "../hooks/useToggler";
import UserCard from "../Components/UserCard"

const CreditCard = ({ id }) => {
  return (
    <div className="container">
      <div>
        <div className="plus">
          <p>Your cards</p>
          <img  src={plus} alt="cardfront" />
        </div>
        <div>
          <img className="img__card" src={imgFront} alt="cardfront" />
        </div>
        <p>{<UserCardList/>}</p>
        <p>{<UserCard />}</p>
        <div>
          <img className="img__card" src={imgBack} alt="cardback" />
        </div>
      </div>

      {/* <button onClick={changeToggle}>
        {toggled ? (
          <img className="img_btn_like" src="../picture/like.png" alt="like" />
        ) : (
          <img
            className="img_btn_like"
            src="../picture/dislike.svg"
            alt="dislike"
          />
        )}
      </button> */}
    </div>
  );
};

export default CreditCard;

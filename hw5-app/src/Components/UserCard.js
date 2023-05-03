import { useToggle } from "../hooks/useToggler";

const UserCard = ({
  user_id,
  user_name,
  data,
  numbers,
  type,
  expiry_date,
  cvv,
  statistic,
}) => {
  const [isLiked, setLiked] = useToggle(false);

  return (
    <div>
      <h4>
        {user_id} {user_name}{" "}
      </h4>
      {isLiked && (
        <h5>
          <span> data:</span>
          {data} <br />
          <span> numbers:</span>
          {numbers} <br />
          <span> type:</span>
          {type} <br />
          <span> expiry_date:</span>
          {expiry_date} <br />
          <span> cvv:</span>
          {cvv} <br />
          <span> statistic:</span>
          {statistic} <br />
        </h5>
      )}

      <button className="options__card" onClick={setLiked}>See details</button>
    </div>
  );
};

export default UserCard;

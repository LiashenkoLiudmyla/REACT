import withToggler from "../HOCs/withToggler";

const User = ({
  username,
  email,
  city,
  street,
  suite,
  phone,
  toggled,
  changeToggle,
}) => {
  return (
    <div>
      <h4>
        {username} {email}{" "}
      </h4>
      {toggled && (
        <h5>
          <span> city:</span>
          {city} <br />
          <span> street:</span>
          {street} <br />
          <span> suite:</span>
          {suite} <br />
          <span> phone:</span>
          {phone}
        </h5>
      )}
      <button onClick={changeToggle}>See details</button>
    </div>
  );
};

export default withToggler(User);

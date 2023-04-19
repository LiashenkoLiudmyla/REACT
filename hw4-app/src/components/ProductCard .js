import  {Tooltip}  from "./Tooltip ";

export const ProductCard = ({ title, category, price, image, rating, name }) => {
  return (
    <div>
      <div className="card flex">
        <div
          className=" product_info"
          style={{ position: "relative", zIndex: 0 }}
        >
          <h4>{` ${title}`}</h4>
          <h5>{` ${category}`}</h5>
          <h5>{`Cena: ${price}`}</h5>
        </div>
      </div>

      <Tooltip
        content={
          <>
            <h3>{name}</h3>
            <p>{`Price:${price}`}</p>
            <p>{`Rating:${rating}`}</p>
          </>
        }
        renderTooltip={(toggleTooltip, handleMouseMove) => (
          <img
            src={image}
            alt={name}
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
            onMouseMove={handleMouseMove}
          />
        )}
      />
    </div>
  );
};



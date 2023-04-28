import { Tooltip } from "./Tooltip";

export const ProductCard = ({ title, category, price, image, name }) => {
  return (
    <div>
      <div className="card_all">
        <Tooltip
          content={
            <>
              <p className="category">{category}</p>
              <p className="price">{`Ціна: ${price} $`}</p>
            </>
          }
          renderTooltip={(toggleTooltip, handleMouseMove) => (
            <div className="container_jpg">
              <img
                src={image}
                alt={category}
                onMouseEnter={toggleTooltip}
                onMouseLeave={toggleTooltip}
                onMouseMove={handleMouseMove}
              />
            </div>
          )}
        />
        <div>
          <h4 className="category">{` ${title}`}</h4>
          <h5>{` ${category}`}</h5>
          <h5>{`Ціна: ${price} $`}</h5>
        </div>
      </div>
    </div>
  );
};

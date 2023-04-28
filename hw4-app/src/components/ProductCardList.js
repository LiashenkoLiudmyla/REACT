import { ProductCard } from "./ProductCard";

export const ProductCardList = ({ data: cards }) => {
  return (
    <div className="product_card_list">
      {cards.map((card) => (
        <ProductCard
          title={card.title}
          price={card.price}
          category={card.category}
          image={card.image}
        />
      ))}
    </div>
  );
};

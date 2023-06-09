import { ProductCardList } from "../components/ProductCardList";
import { DataMaker } from "../components/DataMaker";

const getCards = "https://fakestoreapi.com/products";

const Task4 = (data) => {
  return (
    <div>
      <h2>Task 4</h2>
      <DataMaker
        url={getCards}
        renderDataUrl={(data) => <ProductCardList data={data} />}
      />
    </div>
  );
};

export default Task4;

import { ProductCardList } from "./ProductCardList";
import { DataMaker } from './DataMaker'




const getCards = "https://fakestoreapi.com/products"

const Task4 = (data) => {
  return (
    <div>
      <h2>Task 4</h2>
      <DataMaker url={getCards} renderDataUrl={(data) => <ProductCardList data={data}/>}/>
     
    </div>
  );
};

export default Task4;

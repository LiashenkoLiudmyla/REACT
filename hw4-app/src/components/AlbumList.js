import Album from "./Album";
import { withFetchingData } from "../HOCs/withFetchingData";

const AlbumList = ({ data: albums, isLoading, error }) => {
  return (
    <>
      <h3>ALBUMS</h3>
      <div className="product_card_list">
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {albums &&
          albums.map((album) => (
            <Album title={album.title} thumbnailUrl={album.thumbnailUrl} />
          ))}
      </div>
    </>
  );
};
export default withFetchingData(AlbumList);



// function findText(id){ //тут передаємо кокретний айді по якому будемо шукати
//   const taskText = TasksList.map((task) => {
//       if(task.id === id){
//           return task.text
//       }
//   })
//   return taskText.join()
// }

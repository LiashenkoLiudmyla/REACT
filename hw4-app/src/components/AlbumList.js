import Album from "./Album";
import  { withFetchingData } from "../HOCs/withFetchingData";


const AlbumList = ({data: albums, isLoading, error}) => {
    return (
        <div>
            <h3>ALBUMS</h3>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {albums && albums.map(album => (
                 <Album
                 title={album.title}
                 thumbnailUrl={album.thumbnailUrl}
             />
            ))}
        </div>
    )
}
export default withFetchingData(AlbumList)

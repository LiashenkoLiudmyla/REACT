import UserHook from "../components/UserHook";
import AlbumHook from "../components/AlbumHook";
import { userData } from "../data/userData";
import { albumData } from "../data/albumsData";

function Task_5() {
  return (
    <div>
      <h2>Task 5</h2>
      <UserHook
        username={userData.username}
        email={userData.email}
        phone={userData.phone}
        address={userData.address}
        city={userData.address.city}
        street={userData.address.street}
        suite={userData.address.suite}
        company={userData.company.name}
      />
      <AlbumHook
        title={albumData.title}
        thumbnailUrl={albumData.thumbnailUrl}
      />
    </div>
  );
}

export default Task_5;

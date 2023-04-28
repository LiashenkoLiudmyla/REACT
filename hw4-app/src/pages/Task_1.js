import User from "../components/Users";
import { userData } from "../data/userData";
import Album from "../components/Album";
import { albumData } from "../data/albumsData";

const Task_1 = () => {
  return (
    <div>
      <h2>Task 1</h2>
      <User
        username={userData.username}
        email={userData.email}
        phone={userData.phone}
        address={userData.address}
        city={userData.address.city}
        street={userData.address.street}
        suite={userData.address.suite}
        company={userData.company.name}
      />
      <Album title={albumData.title} thumbnailUrl={albumData.thumbnailUrl} />
    </div>
  );
};

export default Task_1;

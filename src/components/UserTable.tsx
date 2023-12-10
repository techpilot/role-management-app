import axios from "axios";
import { useEffect, useState } from "react";

interface UserDataState {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
  friends: [
    {
      id: string;
      name: string;
    }
  ];
}

const UserTable = () => {
  const [users, setUsers] = useState<UserDataState[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/users.json");
      console.log(response);
      setUsers(response?.data);
    })();
  }, []);
  console.log(users);

  return (
    <div className="w-full">
      <div className="grid grid-cols-7 items-center text-[0.5rem] lg:text-xs bg-gray-50 p-2 lg:p-5 gap-28 md:gap-5 text-[#636872]">
        <p className="text-left font-semibold min-w-max">ID</p>
        <p className="text-left font-semibold min-w-max">First Name</p>
        <p className="text-left font-semibold min-w-max">Last Name</p>
        <p className="text-left font-semibold min-w-max">Email</p>
        <p className="text-left font-semibold min-w-max">Gender</p>
        <p className="text-left font-semibold min-w-max">IP Address</p>
        <p className="text-left font-semibold min-w-max">Friends</p>
      </div>

      {users?.map((user, index) => (
        <div
          key={index}
          className="grid grid-cols-7 items-center text-[0.5rem] lg:text-[0.75rem] mb-[0.5rem] p-2 lg:p-5 gap-28 md:gap-5"
        >
          <p className="text-left">{user.id}</p>
          <p className="text-left">{user.first_name}</p>
          <p className="text-left">{user.last_name}</p>
          <p className="text-left">{user.email}</p>
          <p className="text-left">{user.gender}</p>
          <p className="text-left">{user.ip_address}</p>
          <p className="text-left">
            {user.friends.map((friend) => (
              <>{`${friend.name}, `}</>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserTable;

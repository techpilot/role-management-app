import UserTable from "./UserTable";

const UserContainer = () => {
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="w-[100vw] flex flex-col justify-between h-full px-[0.5rem] relative">
      <div className="w-full h-[20rem] bg-[#4682ba] absolute left-0 -z-10 m-auto"></div>
      <div className="h-[95vh] lg:h-[85vh] mt-[1rem] md:mt-[4rem] flex flex-col items-start gap-7 mx-0 xl:mx-[3rem]">
        <p className="font-bold text-2xl font-serif text-white">
          Roller Coaster
        </p>
        <div className="flex-1 lg:h-full w-full bg-white rounded-sm shadow-lg overflow-scroll no-scrollbar p-3 lg:p-5 flex flex-col gap-3 md:gap-[1rem]">
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-[#4682ba] font-serif">Users</p>
            <div className="flex justify-end items-center gap-3">
              <p className="font-medium text-base capitalize font-serif">{`Role: ${role}`}</p>
              <button
                onClick={handleLogout}
                className="px-3 py-2 border-none outline-none bg-[#4682ba] text-white font-semibold text-sm rounded-md"
              >
                Logout
              </button>
            </div>
          </div>

          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default UserContainer;

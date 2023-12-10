import UserTable from "./UserTable";

const UserContainer = () => {
  return (
    <div className="w-[100vw] flex flex-col justify-between h-full px-[0.5rem] relative">
      <div className="w-full h-[20rem] bg-[#4682ba] absolute left-0 -z-10 m-auto"></div>
      <div className="h-[95vh] lg:h-[85vh] mt-[1rem] md:mt-[4rem] flex flex-col lg:flex-row items-start gap-7 mx-0 xl:mx-[3rem]">
        <div className="flex-1 lg:h-full w-full bg-white rounded-sm shadow-lg overflow-scroll no-scrollbar lg:p-5 flex flex-col gap-3 md:gap-[1rem]">
          <p className="text-2xl font-bold text-[#4682ba] font-serif">Users</p>

          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default UserContainer;

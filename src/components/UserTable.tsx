const UserTable = () => {
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

      <div className="grid grid-cols-7 items-center text-[0.5rem] lg:text-[0.75rem] mb-[0.5rem] p-2 lg:p-5 gap-28 md:gap-5">
        <p className="text-left">1</p>
        <p className="text-left">Ngwu</p>
        <p className="text-left">Stephen</p>
        <p className="text-left">ngwustephen99@gmail.com</p>
        <p className="text-left">Male</p>
        <p className="text-left">129.382</p>
        <p className="text-left">Brothers</p>
      </div>
    </div>
  );
};

export default UserTable;

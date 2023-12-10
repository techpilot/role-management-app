const UserContainer = () => {
  return (
    <div className="w-[100vw] flex flex-col justify-between h-full px-[1rem] relative">
      <div className="w-full h-[20rem] bg-[#8E0789] absolute left-0 -z-10 m-auto"></div>
      <div className="h-[85vh] mt-[4rem] flex flex-col lg:flex-row items-start gap-7 mx-[3rem]">
        <div
          // onSubmit={handleSubmit(onSubmit)}
          className="flex-1 lg:h-full w-full bg-white rounded-lg shadow-lg overflow-y-scroll no-scrollbar p-5 xl:p-10 flex flex-col gap-3 md:gap-[3rem]"
        >
          user data
        </div>
      </div>
    </div>
  );
};

export default UserContainer;

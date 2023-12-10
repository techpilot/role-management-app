interface ButtonComponentProps {
  children?: String;
  eventHandler?: any;
  type?: String | any;
  loading?: Boolean | any;
}

const Button: React.FC<ButtonComponentProps> = ({ children, eventHandler, type, loading }) => {
  const styles = {
    main: `flex items-center justify-center w-full outline-none font-semibold text-base text-white rounded-sm bg-[#4682ba] border-0 border-[#4682ba] py-3 px-4`,
  };

  return (
    <button
      onClick={eventHandler}
      type={type}
      disabled={loading}
      className={styles?.main}
    >
      {children}
    </button>
  );
};

export default Button;

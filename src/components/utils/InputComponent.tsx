import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useState } from 'react';

interface InputComponentProps {
  type?: String;
  placeholder?: String;
  disabled?: Boolean;
  password?: Boolean;
  label?: String;
  error?: String;
  register?: any;
}

const InputComponent: React.FC<InputComponentProps> = ({
  type,
  placeholder,
  disabled,
  password,
  label,
  error,
  register,
}) => {
  const [passwordType, setPasswordType] = useState(type);
  const passwordToggle = () => {
    if (passwordType === 'text') {
      return (
        <VisibilityOutlinedIcon
          className="text-gray-400 h-5 w-5 mx-2 cursor-pointer"
          onClick={() => setPasswordType('password')}
        />
      );
    } else if (passwordType === 'password') {
      return (
        <VisibilityOffOutlinedIcon
          className="text-gray-400 h-5 w-5 mx-2 cursor-pointer"
          onClick={() => setPasswordType('text')}
        />
      );
    } else return null;
  };

  return (
    <div className="grid gap-1">
      <p className="text-[#35480D] font-normal text-sm">{label}</p>
      <div className="grid gap-1">
        <div
          className={
            error
              ? 'relative flex items-center bg-white border border-red-600 rounded-sm text-[#35480D] outline-none mb-4'
              : 'relative flex items-center bg-white rounded-sm text-[#35480D] outline-none border border-[#8E0789] mb-4'
          }
        >
          <input
            className="w-full py-2 px-3 outline-none border-none bg-inherit rounded-sm no-number-arrows focus:border-none"
            type={passwordType}
            placeholder={placeholder}
            {...register}
            disabled={disabled}
          />
          {password && passwordToggle()}
        </div>
      </div>
    </div>
  );
};

export default InputComponent;

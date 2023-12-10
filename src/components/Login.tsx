import { useNavigate } from "react-router-dom";
import login_bg from "../assets/login_bg.png";
import Button from "./utils/Button";
import InputComponent from "./utils/InputComponent";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import { generateRandomString } from "./actions/generateToken";

const schema = yup.object().shape({
  email: yup.string().required("Email field cannot be empty"),
  password: yup.string().required("Password field cannot be empty"),
});

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>();

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: "all",
    reValidateMode: "onSubmit",
    mode: "onChange",
  });

  const onSubmit = async () => {
    const data = getValues();
    const response = await axios.get("/accounts.json");

    const user = response.data.find(
      (user: any) =>
        user.email === data?.email && user.password === data?.password
    );

    if (user) {
      const randomString = generateRandomString();
      // console.log(randomString);
      localStorage.setItem("token", randomString);
      localStorage.setItem("role", user.role);

      navigate("/users");
    } else {
      setError("Incorrect username or password");
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between h-[100vh]">
      <div className="relative flex flex-col h-full justify-between w-[100%] text-gray-700 overflow-x-hidden">
        <div className="h-full w-[95%] md:w-[80%] md:my-[1.5rem] bg-white shadow-xl rounded-sm px-5 py-5 xl:py-10 flex flex-col items-center gap-7">
          <p className="text-[#000] font-semibold text-sm md:text-lg text-center">
            Welcome to Roller Coaster
          </p>
          <p className="text-[#BDBDBD] font-semibold text-sm text-center -mt-5">
            Sign in to your account here
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-1 flex flex-col justify-between items-center"
          >
            <div className="w-[18rem] md:w-[30rem] flex flex-col gap-2 md:gap-5">
              <InputComponent
                error={errors?.email?.message}
                register={register("email")}
                label={"Email"}
                type={"email"}
              />
              <InputComponent
                error={errors?.password?.message}
                register={register("password")}
                label={"Password"}
                type={"password"}
                password={true}
              />

              {error &&
                !errors?.email?.message &&
                !errors?.password?.message && (
                  <p className="text-sm text-red-600 p-3 bg-red-50 rounded-sm">{`! ${error}`}</p>
                )}
            </div>

            <div className="w-full">
              <Button type="submit">Login</Button>
            </div>
          </form>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${login_bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-[100%] h-[25vh] lg:h-[100vh] flex flex-col justify-center items-center"
      >
        <p className="font-serif text-white font-bold text-lg md:text-xl lg:text-[2rem] p-5 lg:p-10 bg-white bg-opacity-5 backdrop-blur-sm w-[90%] lg:w-[30rem] lg:mx-3">
          Roller Coaster brings data management opportunities straight to your
          screen
        </p>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/images/login.jpg";
import { FiEye, FiEyeOff } from "react-icons/fi";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [text, setText] = useState();

  const onShowPassword = () => {
    setText((prevState) => !prevState);
  };

  const changeEmail = (value) => {
    setEmail(value);
  };

  const changePassword = (value) => {
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="relative min-h-screen w-full bg-no-repeat bg-center bg-fixed bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-full md:bg-opacity-25 p-8">
        <div className="flex justify-center content-center w-full min-h-screen ">
          <form
            className="flex flex-col text-center bg-black bg-opacity-70 px-8 py-8 self-center mt-2 lg:w-2/5  lg:max-w-md rounded-md w-full"
            onSubmit={handleSubmit}
          >
            <h2 className="text-white font-bold text-4xl">Sign in</h2>
            <div className="flex w-full flex-col">
              <span className="text-white text-xl text-start">Почта</span>
              <input
                className="outline-none my-4 rounded-sm p-2 text-xl"
                placeholder="Введите почту"
                onChange={(e) => changeEmail(e.target.value)}
              />
              <span className="text-white text-xl text-start">Пароль</span>
              <div className="flex w-full bg-white my-4 rounded-sm p-2 ">
                <input
                  className="outline-none border-none w-full text-xl"
                  placeholder="Введите пароль"
                  onChange={(e) => changePassword(e.target.value)}
                  type={text ? "text" : "password"}
                />
                <button
                  className="relative top-0 left-0 z-10"
                  onClick={() => onShowPassword()}
                >
                  {text ? (
                    <FiEye className="text-black" />
                  ) : (
                    <FiEyeOff className="text-black" />
                  )}
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-green-400 p-2 rounded-sm text-white my-2"
              >
                Войти
              </button>
              <div className="flex justify-center w-full mt-4 text-center">
                <label className="text-white text-center">
                  Нету аккаунта?
                  <Link
                    to="/sign-up"
                    className="mx-1 text-blue-300 text-center"
                  >
                    зарегистрироваться
                  </Link>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

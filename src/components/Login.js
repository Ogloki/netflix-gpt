import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [Signin, setSignin] = useState(true);
  const handelSignin = () => {
    setSignin(!Signin);
  };

  const [Email, setEmail] = useState(null);
  console.log(Email);

  return (
    <div>
      <Header />
      <form className="bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white rounded">
        <h1 className="text-3xl pt-12 pb-4 px-12">
          {Signin ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Enter your Email"
          className="p-4 my-2 w-3/4 mx-12 rounded bg-gray-700"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>

        {!Signin && (
          <input
            type="text"
            placeholder="Enter your Username"
            className="p-4 my-2 w-3/4 mx-12 rounded bg-gray-700"
          ></input>
        )}

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-3/4 mx-12 rounded bg-gray-700"
        ></input>
        <button className="p-4 my-4 mb-10 bg-red-600 w-3/4 mx-12 rounded">
          {Signin ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 w-3/4 mx-12 mb-4">
          <span className="cursor-pointer" onClick={handelSignin}>
            {Signin
              ? "New to Netflix? Sign Up Now"
              : "Already a Member Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

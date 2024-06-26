import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";

const login = () => {
  const data = {
    email: "",
    password: "",
  };
  const [inputdata, setinputdata] = useState(data);
  const [flage, setflage] = useState(false);
  useEffect(() => {
    console.log("registrad");
  }, [flage]);
  const handledata = (e) => {
    setinputdata({ ...inputdata, [e.target.name]: e.target.value });
    console.log(inputdata);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!inputdata.email || !inputdata.password) {
      alert("All fields are Mandatory");
    } else {
      setflage(true);
    }
  };
  return (
    <div className="wrapper m-0 p-0 box-border flex  justify-center align-center min-h-screen bg-slate-800 text-white ">
      <div className="relative w-[450px] h-[450px] bg-slate-700 rounded-xl absolute top-28">
        <pre>
          {flage ? (
            <h2 className="ui-define">
              {inputdata.name}u are login Sucessfully
            </h2>
          ) : (
            ""
          )}
        </pre>

        <form
          className=" w-[100%] p-[40px] absolute top-0 flex flex-col justify-between "
          onSubmit={handlesubmit}
        >
          <h1 className="text-3xl text-center">Login form</h1>

          <div className="relative right-4 w-full h-12 m-4 rounded-xl bg-transparent ">
            <input
              className="w-80  min-h-full bg-transparent  outline-none  rounded-xl"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={inputdata.email}
              onChange={handledata}
            />
            <MdEmail className=" absolute right-2 top-4 text-xl" />
          </div>

          <div className="relative right-4 w-full h-12 m-4 rounded-xl bg-transparent ">
            <input
              className="w-80  min-h-full bg-transparent  outline-none rounded-xl"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={inputdata.password}
              onChange={handledata}
            />
            <FaLock className=" absolute right-2 top-4 text-xl" />
          </div>

          <dir className="flex justify-between ml-0 mt-2 pl-0">
            <label>
              <input type="checkbox" className="" /> Remamber me
            </label>
            <a className="" href="#">
              Forget password?
            </a>
          </dir>

          <button
            className="w-full min-h-12 rounded-xl bg-white border-none outeline-none mt-2 text-slate-800 text-xl"
            type="submit"
          >
            Submit
          </button>

          <div className="flex justify-between mt-4">
            <p>
              Dont have an account?{" "}
              <a className=" absolute right-20" href="#">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;

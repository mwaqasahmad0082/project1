import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const sidebar = () => {
  const inputRef = useRef(null);
  function handleinput() {
    inputRef.current.focus();
  }
  useEffect(() => {
    fetch("https://jsonplaceholdclearer.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setfilterdata(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const [data, setdata] = useState([]);
  const [filterdata, setfilterdata] = useState([]);
  const handleFilter = (value) => {
    const res = filterdata.filter((f) => f.name.toLowerCase().includes(value));
    setdata(res);
    if (value === "") {
      setdata([]);
    }
  };
  const [open, setopen] = useState(true);
  return (
    <div className="fixed flex">
      <div
        className={`bg-neutral-900 h-screen p-5  ${
          open ? "w-80" : "w-24"
        } duration-300 relative`}
      >
        <FaArrowRightArrowLeft
          className="bg-white text-black text-4xl rounded-full absolute right-3 top-9 border border-black p-2 cursor-pointer"
          onClick={() => setopen(!open)}
        />

        <div className="bg-neutral-900 min-h-72">
          <div className="flex w-80  mt-12 ml-8 gap-12">
            <IoMdAdd
              className={` text-2xl fixed hover:bg-black rounded-lg cursor-pointer relative top-2 mt-2  duration-500 ${
                !open && "rotate-[360deg]"
              } `}
            />

            <button
              className={`duration-300 hover:bg-black rounded-md mt-4 cursor-pointer ${
                !open && "scale-0"
              }`}
              onClick={handleinput}
            >
              New Chat
            </button>
          </div>

          <div className="flex w-80  mt-4 ml-8 gap-12">
            <FaSearch
              className={`text-xl hover:bg-black rounded-lg cursor-pointer relative top-1 mt-2  duration-500 ${
                !open && "rotate-[360deg]"
              } `}
            />
            <input
              type="text"
              className={`bg-transparent duration-300 hover:bg-black rounded-md mt-2 cursor-pointer ${
                !open && "scale-0"
              }`}
              ref={inputRef}
              placeholder="Search here..."
              onChange={(e) => handleFilter(e.target.value)}
            />
          </div>

          <div
            className={`bg-neutral-900 w-40 ml-24 hover:bg-black rounded-md mt-2 cursor-pointer ${
              !open && "scale-0"
            }`}
          >
            {data.map((d, i) => (
              <div key={i}>{d.name}</div>
            ))}
          </div>
        </div>

        <div className=" flex flex-col w-64 text-center relative left-6  gap-2">
          <div className="relative right-28 font-semibold">
            <h1 className="hover:bg-black rounded-lg cursor-pointer ">
              Recent
            </h1>
          </div>
          <div className="flex gap-10">
            <FiMessageSquare
              className={` hover:bg-black rounded-lg cursor-pointer relative top-2 mt-2 duration-500 ${
                !open && "rotate-[360deg]"
              } `}
            />
            <h1
              className={`duration-300 hover:bg-black rounded-md mt-2 cursor-pointer ${
                !open && "scale-0"
              }`}
            >
              Azure Region not found
            </h1>
          </div>
          <div className="flex gap-10">
            <FiMessageSquare
              className={`hover:bg-black rounded-lg cursor-pointer relative top-2 mt-2  duration-500 ${
                !open && "rotate-[360deg]"
              } `}
            />
            <h1
              className={`duration-300 hover:bg-black rounded-md mt-2 cursor-pointer ${
                !open && "scale-0"
              }`}
            >
              Split PDF in Python
            </h1>
          </div>
          <div className="flex gap-10">
            <FiMessageSquare
              className={`hover:bg-black rounded-lg cursor-pointer relative top-2 mt-2  duration-500 ${
                !open && "rotate-[360deg]"
              } `}
            />
            <h1
              className={`duration-300 hover:bg-black rounded-md mt-2 cursor-pointer ${
                !open && "scale-0"
              }`}
            >
              Using Azure DI for larg...
            </h1>
          </div>
          <div className="flex gap-10">
            <FiMessageSquare
              className={`hover:bg-black rounded-lg cursor-pointer relative top-2 mt-2  duration-500 ${
                !open && "rotate-[360deg]"
              } `}
            />
            <h1
              className={`duration-300 hover:bg-black rounded-md mt-2 cursor-pointer ${
                !open && "scale-0"
              }`}
            >
              Shiring Whisper Model...
            </h1>
          </div>
          <div className="flex gap-10">
            <FiMessageSquare
              className={`hover:bg-black rounded-lg cursor-pointer relative top-2 mt-2  duration-500 ${
                !open && "rotate-[360deg]"
              } `}
            />
            <h1
              className={`duration-300 hover:bg-black rounded-md mt-2 cursor-pointer ${
                !open && "scale-0"
              }`}
            >
              Machine Learning Metri.
            </h1>
          </div>
        </div>

        <div className=" flex flex-col relative left-6 top-4 w-24 gap-6 h-8  text-end">
          <div className="flex  gap-8 rounded-3xl">
            <IoIosHelpCircleOutline
              className={`hover:bg-black rounded-lg cursor-pointer relative top-1 duration-500 ${
                !open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={` hover:bg-black rounded-lg cursor-pointer duration-300 ${
                !open && "scale-0"
              }`}
            >
              Help
            </h1>
          </div>
          <div className="flex  gap-8 rounded-3xl">
            <FaClockRotateLeft
              className={`hover:bg-black rounded-lg cursor-pointer relative top-1 duration-500 ${
                !open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={` hover:bg-black rounded-lg cursor-pointer duration-300 ${
                !open && "scale-0"
              }`}
            >
              Activity
            </h1>
          </div>
          <div className="flex  gap-8 rounded-3xl">
            <IoMdSettings
              className={`hover:bg-black rounded-lg cursor-pointer relative top-1 duration-500 ${
                !open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={` hover:bg-black rounded-lg cursor-pointer duration-300 ${
                !open && "scale-0"
              }`}
            >
              Activity
            </h1>
          </div>
        </div>

        <div className="flex relative top-32 ml-4 w-64 gap-6">
          <GoDotFill className="text-2xl hover:bg-black rounded-lg cursor-pointer " />
          <h6
            className={`text-xs hover:bg-black rounded-lg cursor-pointer  duration-300 ${
              !open && "scale-0"
            }`}
          >
            Bahria town Phase8 Extensinon Phase8 <br />
            Bahria town,Rawalpindi,Pakistan
          </h6>
        </div>
      </div>
    </div>
  );
};

export default sidebar;

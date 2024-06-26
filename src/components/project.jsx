
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { FaMarker } from "react-icons/fa";
import { IoSyncCircleSharp } from "react-icons/io5";
import { RiPictureInPicture2Fill } from "react-icons/ri";
import { MdKeyboardVoice } from "react-icons/md";
import { PiShieldWarningDuotone } from "react-icons/pi";
import Section from "./section";
import Sidebar from "./sidebar";

const firstform = () => {
  const [formvalue, setformvalue] = useState({});
};

const project = () => {
  const menus = ["php", "css", "javascript", "reactjs", "html", "bootsrap"];
  const [open, setopen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen">
      <main className="flex flex-col">
        <nav className="bg-blue-800 text-white text-center mt-2 p-2 fixed w-full">
          <p class="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            animi!
          </p>
        </nav>
         <Sidebar/>
        <Section />
      </main>
    </div>
  );
};

export default project;

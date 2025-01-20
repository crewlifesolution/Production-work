//Importing all packages
import React, { useState } from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

//Importing the images
import logo from "../../public/logo.jpeg";

const navbar = () => {
  //Let us remove the NavBar
  const [active, setActive] = useState("navBarMenu");
  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };

  const removeNavBar = () => {
    setActive("navBarMenu");
  };

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>

        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" /> Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" /> Languages
          </li>
        </div>

        <div className="atb flex">
          <span>Log in</span>
          <span>Sign up</span>
        </div>
      </div>

      <div className="navBarTwo">
        <div className="logoDiv">
          <img src={logo} className="Logo" />
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">
              Home
            </li>
            <li onClick={removeNavBar} className="listItem">
              About Us
            </li>
            <li onClick={removeNavBar} className="listItem">
              Services
            </li>
            <li onClick={removeNavBar} lassName="listItem">
              Search
            </li>
            <li onClick={removeNavBar} className="listItem">
              Packages
            </li>
          </ul>

          <button onClick={removeNavBar} className="btn flex btnOne">
            Contact Us
          </button>
        </div>

        <div onClick={showBarMenu} className="toggleIcon">
          <CgMenuGridO />
        </div>
      </div>
    </div>
  );
};

export default navbar;

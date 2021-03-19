import React from "react";
import { Link } from "react-router-dom";
import { HiLogin } from "react-icons/hi";
import cls from "classnames";
import { HiOutlineBell } from "react-icons/hi";

import { Button, Avatar, Switch } from "components";
// import { useAppSettings } from "context";

import avatar1 from "assets/img/Avatar-1.png";
import avatar2 from "assets/img/Avatar-2.png";
import avatar3 from "assets/img/Avatar-3.png";
import avatar4 from "assets/img/Avatar-4.png";

export default function Navbar({ classes }) {
  // const { sidebarCollapsed } = useAppSettings();

  return (
    <nav
      className={cls(
        "relative z-10 bg-white flex flex-row flex-no-wrap justify-start items-center p-2"
        // classes && (sidebarCollapsed ? classes.collapsed : classes.expanded)
      )}
    >
      <div className="w-full mx-autp items-center flex justify-between flex-no-wrap">
        <div className="nav-buttons">
          <Button color="secondary" size="small">
            <HiLogin className="w-3 h-3" />
            <span>Back</span>
          </Button>
        </div>
        <div className="nav-right-pane flex flex-row justify-end items-stretch mx-2">
          <div className="inline-flex relative w-auto items-center justify-center">
            <Avatar src={avatar1} borderColor="secondary" size="small" />
            <Avatar src={avatar2} borderColor="secondary" size="small" />
            <Avatar src={avatar3} borderColor="secondary" size="small" />
            <Avatar src={avatar4} borderColor="secondary" size="small" />
          </div>
          <div className="inline-flex relative items-center justify-center mx-2">
            <Link to="/" className="text-gray-500 hover:text-gray-800">
              Manage Access
            </Link>
          </div>
          <span className="w-0.5 bg-gray-200 bg-clip-content py-2 mx-4" />
          <div className="inline-flex relative items-center justify-center mx-2">
            <Switch text="Edit" />
          </div>
          <span className="w-0.5 bg-gray-200 bg-clip-content py-2 mx-4" />
          <div className="inline-flex relative items-center justify-center mx-2">
            <span className="px-3 relative flex flex-row items-center h-11 text-gray-700 rounded-md bg-transparent hover:bg-gray-200 hover:text-gray-800 focus:outline-none">
              <span className="inline-flex justify-center items-center">
                <HiOutlineBell className="w-7 h-7 text-gray-500" />
              </span>
              <span className="absolute right-0 top-0 px-2 py-0.5 mr-1 ml-auto text-xs font-medium tracking-wide rounded-full text-white bg-red-600">
                99
              </span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

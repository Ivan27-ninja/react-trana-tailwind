import React from "react";
import { CgPushChevronLeft, CgPushChevronRight } from "react-icons/cg";
import cls from "classnames";

const SidebarHeader = ({ primary, secondary, logo, collapse, isCollapsed }) => (
  <div className="flex items-center flex-wrap justify-center w-full">
    <div className="w-8 rounded align-middle overflow-hidden">
      <img className="object-fill bg-gray-200" src={logo} alt="logo" />
    </div>
    <div className={cls("flex-1 px-2", isCollapsed && "hidden")}>
      <p className="text-sm font-bold tracking-wide">{primary}</p>
      <p className="text-xs tracking-wide text-gray-500">{secondary}</p>
    </div>
    <button
      className="w-5 h-5 my-3 mx-1 bg-gray-200 rounded"
      onClick={collapse}
    >
      {isCollapsed ? (
        <CgPushChevronRight className="w-full h-auto" />
      ) : (
        <CgPushChevronLeft className="w-full h-auto" />
      )}
    </button>
  </div>
);

export default SidebarHeader;

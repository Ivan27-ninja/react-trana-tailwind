import React, { useEffect } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import cls from "classnames";
import {
  HiOutlineHome,
  HiOutlineBell,
  HiOutlineInbox,
  HiOutlineSearch,
} from "react-icons/hi";

import { useAppSettings } from "context";
import SidebarHeader from "./SidebarHeader";
import { NavMenu, NavSubMenu, NavMenuItem, NavMenuHeader } from "./NavMenu";

import logoImg from "assets/img/logo.png";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export default function Sidebar({ classes }) {
  const { sidebarCollapsed, setSidebarCollapse } = useAppSettings();
  const sidebarCollapsedState = React.useRef(sidebarCollapsed);

  useEffect(() => {
    const resizeEventListener = (event) => {
      if (window.innerWidth > parseFloat(fullConfig.theme.screens.md)) {
        setSidebarCollapse(sidebarCollapsedState.current);
      } else {
        setSidebarCollapse(true);
      }
    };

    window.addEventListener("resize", resizeEventListener);
    return () => {
      window.removeEventListener("resize", resizeEventListener);
    };
  }, [setSidebarCollapse]);

  const collapse = () => {
    setSidebarCollapse(!sidebarCollapsed);
    sidebarCollapsedState.current = !sidebarCollapsed;
  };

  return (
    <nav
      className={cls(
        "block fixed top-0 left-0 bottom-0 overflow-hidden flex flex-col flex-wrap items-stretch justify-stretch bg-gray-50 border boder-gray-300 z-30 py-6 px-2",
        classes && (sidebarCollapsed ? classes.collapsed : classes.expanded)
      )}
    >
      <SidebarHeader
        logo={logoImg}
        primary="Design Foundation"
        secondary="Wather Taylor"
        collapse={collapse}
        isCollapsed={sidebarCollapsed}
      />
      <NavMenu>
        <NavSubMenu>
          <NavMenuItem
            icon={<HiOutlineHome className="w-5 h-5" />}
            text="Home"
            to="/home"
            isCollapsed={sidebarCollapsed}
          />
          <NavMenuItem
            icon={<HiOutlineBell className="w-5 h-5" />}
            text="Activity"
            to="/activity"
            chip={{ text: "125", className: "text-white bg-red-600" }}
            isCollapsed={sidebarCollapsed}
          />
          <NavMenuItem
            icon={<HiOutlineInbox className="w-5 h-5" />}
            text="Catalog"
            to="/catalog"
            isCollapsed={sidebarCollapsed}
          />
          <NavMenuItem
            icon={<HiOutlineSearch className="w-5 h-5" />}
            text="Explore"
            to="/explore"
            isCollapsed={sidebarCollapsed}
          />
        </NavSubMenu>
        <NavSubMenu>
          <NavMenuHeader primary="Teams" isCollapsed={sidebarCollapsed} />
          <NavMenuItem
            text="Profile"
            to="/teams/profile"
            isCollapsed={sidebarCollapsed}
          />
          <NavMenuItem
            text="Roles"
            to="/teams/roles"
            isCollapsed={sidebarCollapsed}
          />
        </NavSubMenu>
      </NavMenu>
    </nav>
  );
}

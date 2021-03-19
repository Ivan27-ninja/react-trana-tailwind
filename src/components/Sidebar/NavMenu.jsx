import React from "react";
import { Link } from "react-router-dom";
import cls from "classnames";

export const NavMenuItem = ({ icon, text, to, chip, isCollapsed }) => {
  const itemClassName =
    "relative flex flex-row items-center h-11 text-gray-700 rounded-md bg-transparent hover:bg-gray-200 hover:text-gray-800 focus:outline-none";

  const renderInner = () => (
    <>
      {!!icon && (
        <span
          className={cls(
            "inline-flex justify-center items-center",
            isCollapsed ? "mx-auto" : "ml-2"
          )}
        >
          {icon}
        </span>
      )}
      {!isCollapsed && (
        <span className="text-sm tracking-wide truncate ml-4">{text}</span>
      )}
      {!!isCollapsed && !icon && (
        <span className="text-sm tracking-wide truncate mx-auto">
          {text.charAt(0)}
        </span>
      )}
      {!!chip && !!chip.text && (
        <span
          className={cls(
            "px-1 py-0.5 mr-1 ml-auto text-xs font-medium tracking-wide rounded-full",
            isCollapsed && "absolute right-0 bottom-0",
            chip.className
          )}
          style={chip.style}
        >
          {chip.text}
        </span>
      )}
    </>
  );

  return (
    <li>
      {to ? (
        <Link to={to} className={itemClassName}>
          {renderInner()}
        </Link>
      ) : (
        <span className={itemClassName}>{renderInner()}</span>
      )}
    </li>
  );
};

export const NavMenu = ({ children }) => (
  <div className="overflow-y-auto overflow-x-hidden flex-grow space-y-6 py-6">
    {children}
  </div>
);

export const NavSubMenu = ({ children }) => (
  <ul className="flex flex-col space-y-1">{children}</ul>
);

export const NavMenuHeader = ({ primary, sencondary, isCollapsed }) => (
  <li className="px-3">
    <div className="flex flex-row items-center h-8">
      <h6 className="text-sm font-bold uppercase tracking-wide text-gray-500">
        {isCollapsed ? primary.charAt(0) : primary}
      </h6>
      {!!sencondary && <div />}
    </div>
  </li>
);

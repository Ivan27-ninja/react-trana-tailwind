import React from "react";
import cls from "classnames";

// primary, secondary, gray
// medium, small, tiny, large
const Button = ({
  children,
  noShadow,
  color,
  size,
  className,
  disabled,
  ...rest
}) => (
  <button
    {...rest}
    disabled={disabled}
    className={cls(
      "flex flex-row items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white m-2",
      color === "primary" &&
        "text-white bg-blue-600 border border-blue-600 hover:bg-blue-800 focus:ring-blue-600 disabled:bg-blue-300 disabled:border-blue-300",
      color === "secondary" &&
        "text-black bg-white border border-gray-300 hover:bg-gray-100 focus:ring-blue-600 disabled:bg-gray-100 disabled:border-gray-100",
      color === "gray" &&
        "text-black bg-gray-400 border border-gray-400 hover:bg-gray-200 focus:ring-blue-600 disabled:bg-gray-200 disabled:border-gray-200",
      size === "medium" && "text-md px-4 py-2 space-x-4",
      size === "small" && "text-sm px-2 py-1 space-x-2",
      size === "large" && "text-lg px-6 py-3 space-x-6",
      size === "tiny" && "text-xs px-1 py-1 space-x-1",
      !noShadow && "shadow-md",
      className
    )}
  >
    {children}
  </button>
);

Button.defaultProps = {
  color: "primary",
  size: "medium",
  noShadow: true,
};

export default Button;

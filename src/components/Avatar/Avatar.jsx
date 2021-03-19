import React from "react";
import cls from "classnames";

// primary, secondary, gray
// medium, small, tiny, large
const Avatar = ({ src, link, borderColor, size, className, ...rest }) => (
  <span
    {...rest}
    style={{
      backgroundImage: "url(" + src + ")",
    }}
    className={cls(
      size,
      "avatar inline-block bg-cover bg-center rounded-full overflow-hidden bg-white",
      borderColor === "primary" && "border-blue-600",
      borderColor === "secondary" && "border-white",
      borderColor === "gray" && "boder-gray-400",
      className
    )}
  />
);

Avatar.defaultProps = {
  borderColor: "secondary",
  size: "medium",
};

export default Avatar;

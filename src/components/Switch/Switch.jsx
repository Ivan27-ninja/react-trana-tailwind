import React from "react";
import cls from "classnames";

import styles from "./Switch.module.css";

const Switch = ({ text, input, id, ...rest }) => (
  <div className="flex justify-center" {...rest}>
    <label for={id} className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          {...input}
          id={id}
          type="checkbox"
          className={cls("hidden", input.className)}
        />
        <div
          className={cls(
            styles["toggle-path"],
            "bg-gray-200 w-9 h-5 rounded-full shadow-inner"
          )}
        />
        <div
          className={cls(
            styles["toggle-circle"],
            "absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"
          )}
        />
      </div>
      <span className="px-2 text-md">{text}</span>
    </label>
  </div>
);

Switch.defaultProps = {
  input: {},
  id: "switch",
};

export default Switch;

import React, { useState } from "react";
import styles from "./app.component.css";

export const App = () => {
  const [backColor, setBackColor] = useState(true);
  return (
    <div
      className={styles.intro}
      style={
        backColor
          ? {
              backgroundColor: "green",
              color: "violet"
            }
          : { backgroundColor: "violet", color: "green" }
      }
    >
      <span>Hello World!</span>
      <button onClick={() => setBackColor(!backColor)}>
        Change the color!
      </button>
    </div>
  );
};

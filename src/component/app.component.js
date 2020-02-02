import React, { useState } from "react";
import styles from "./app.component.css";
import moment from "moment";

export const App = () => {
  const [backColor, setBackColor] = useState(true);
  const now = moment();
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
      <span>Hello World! Today: {now.format("dddd, MMMM DD YYYY")}</span>
      <button onClick={() => setBackColor(!backColor)}>
        Change the color!
      </button>
    </div>
  );
};

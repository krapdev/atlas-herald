import React from "react";
import { container } from "./Relic.module.css";

const getColor = (realm) => {
  if (realm === "Hibernia") return "green";
  if (realm === "Albion") return "red";
  if (realm === "Midgard") return "blue";
  return "black";
};

const Relic = ({ name, currentRealm, originalRealm, type }) => {
  return (
    <div className={container}>
      <span style={{ color: getColor(currentRealm), marginRight: ".2em" }}>
        <b>{name}</b>
      </span>
      {originalRealm} {type}
    </div>
  );
};

export default Relic;

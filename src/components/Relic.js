import React from "react";
import { container } from "./Relic.module.css";

const Relic = ({ name, currentRealm, type }) => {
  return (
    <div className={container}>
      <span>
        <b>{name}</b> {currentRealm} {type}
      </span>
    </div>
  );
};

export default Relic;

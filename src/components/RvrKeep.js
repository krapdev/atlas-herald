import React from "react";
import { container } from "./RvrKeep.module.css";

const getColor = (realm) => {
  if (realm === "Hibernia") return "green";
  if (realm === "Albion") return "red";
  if (realm === "Midgard") return "blue";
  return "black";
};

const RvrKeep = ({ name, realm, claim, level, underSiege }) => {
  return (
    <div className={container}>
      <span style={{ color: getColor(realm), marginRight: ".2em" }}>
        <b>{name}</b>
      </span>
      {claim} level: {level} underSiege: {underSiege}
    </div>
  );
};

export default RvrKeep;

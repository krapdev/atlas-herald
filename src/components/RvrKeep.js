import React from "react";
import { container } from "./RvrKeep.module.css";

const RvrKeep = ({ name, realm, claim, level, underSiege }) => {
  return (
    <div className={container}>
      <b>{name}</b> {realm} {claim} level: {level} underSiege: {underSiege}
    </div>
  );
};

export default RvrKeep;

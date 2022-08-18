import React from "react";
import { container } from "./Guild.module.css";

const Guild = ({ name, realm, nbMembers, realmPoints }) => {
  return (
    <p className={container}>
      {name} {realm} Realm Points: {realmPoints} Members: {nbMembers}
    </p>
  );
};

export default Guild;

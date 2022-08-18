import React from "react";
import { container, memberName } from "./Member.module.css";

const Member = ({ name, typeClass, realmRank, lastName, race, level }) => {
  return (
    <p className={container}>
      <div className={memberName}>
        {name} {lastName} {realmRank}
      </div>
      {typeClass} {race} {level}
    </p>
  );
};

export default Member;

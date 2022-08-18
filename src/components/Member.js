import React from "react";
import {
  container,
  memberName,
  memberStat,
  pvpStat,
  containerLine,
} from "./Member.module.css";

const Member = ({
  name,
  typeClass,
  realmRank,
  lastName,
  race,
  level,
  nbDeaths,
  nbDeathsBlows,
  nbKills,
  realmPoints,
}) => {
  return (
    <p className={container}>
      <div className={containerLine}>
        <span className={memberName}>
          {name} {lastName} {realmRank}
        </span>
        <div className={pvpStat}>
          <span>
            deathblows {nbDeathsBlows} kills {nbKills} deaths {nbDeaths}
          </span>
        </div>
      </div>
      <div className={memberStat}>
        {typeClass} {race} {level} {realmPoints}
      </div>
    </p>
  );
};

export default Member;

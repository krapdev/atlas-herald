import React, { useEffect, useState } from "react";
import Guild from "../components/Guild";
import Member from "../components/Member";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  const [members, setMembers] = useState([]);
  const [guild, setGuild] = useState();
  useEffect(() => {
    fetch("https://api.atlasfreeshard.com/guild/FrogZ/members")
      .then((response) => response.json())
      .then((resData) => setMembers(resData));

    fetch("https://api.atlasfreeshard.com/guild/FrogZ")
      .then((response) => response.json())
      .then((resData) => setGuild(resData));
  }, []);
  return (
    <main style={pageStyles}>
      <Guild
        name={guild?.name}
        realm={guild?.realm}
        nbMembers={guild?.members}
        realmPoints={guild?.realmPoints}
      />
      {members
        .sort((curr, next) => {
          console.log(curr.realmPoints, next.realmPoints);
          return next.realmPoints - curr.realmPoints;
        })
        .map((member) => {
          const deathsBlows =
            member.killsAlbionDeathBlows +
            member.killsHiberniaDeathBlows +
            member.killsMidgardDeathBlows;
          const kills =
            member.killsAlbionPlayers +
            member.killsHiberniaPlayers +
            member.killsMidgardPlayers;
          return (
            <Member
              name={member.name}
              typeClass={member.class}
              realmRank={member.realmRank}
              lastName={member.lastname}
              race={member.race}
              level={member.level}
              nbDeaths={member.pvpDeaths}
              nbDeathsBlows={deathsBlows}
              nbKills={kills}
            />
          );
        })}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>FrogZ Atlas Herald</title>;

import React, { useEffect, useState } from "react";
import Guild from "../components/Guild";
import Member from "../components/Member";
import RvrEvent from "../components/RvrEvent";
import RvrKeep from "../components/RvrKeep";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const contentStyles = {
  display: "flex",
  justifyContent: "center",
};

const topStyles = {
  fontSize: "0.8em",
};

const IndexPage = () => {
  const [members, setMembers] = useState([]);
  const [guild, setGuild] = useState();
  const [rvrEvents, setRvrEvents] = useState([]);
  const [rvrKeeps, setRvrKeeps] = useState([]);
  const [topRp, setTopRp] = useState([]);
  useEffect(() => {
    fetch("https://api.atlasfreeshard.com/guild/FrogZ/members")
      .then((response) => response.json())
      .then((resData) => setMembers(resData));

    fetch("https://api.atlasfreeshard.com/guild/FrogZ")
      .then((response) => response.json())
      .then((resData) => setGuild(resData));

    fetch("https://api.atlasfreeshard.com/news/type/0")
      .then((response) => response.json())
      .then((resData) => setRvrEvents(resData.slice(0, 10)));

    fetch("https://api.atlasfreeshard.com/realm/hibernia")
      .then((response) => response.json())
      .then((resData) => setRvrKeeps(resData));
    fetch("https://api.atlasfreeshard.com/stats/rp")
      .then((response) => response.json())
      .then((resData) => setTopRp(resData));
  }, []);
  return (
    <main style={pageStyles}>
      <Guild
        name={guild?.name}
        realm={guild?.realm}
        nbMembers={guild?.members}
        realmPoints={guild?.realmPoints}
      />
      <div style={contentStyles}>
        <div>
          {members
            .sort((curr, next) => {
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
                  realmPoints={member.realmPoints}
                />
              );
            })}
        </div>
        <div>
          <p>
            {rvrKeeps.map((rvr) => (
              <RvrKeep
                name={rvr.name}
                realm={rvr.currentRealm}
                claim={rvr.claimingGuild}
                level={rvr.level}
                underSiege={rvr.underSiege}
              />
            ))}
          </p>
          <p>
            {rvrEvents.map((rvr) => (
              <RvrEvent info={rvr.text} date={rvr.date} />
            ))}
          </p>
          <p style={topStyles}>
            <b>TOP 10 Players</b>
            {topRp.map((member) => {
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
                  realmPoints={member.realmPoints}
                />
              );
            })}
          </p>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>FrogZ Atlas Herald</title>;

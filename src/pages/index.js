import React, { useEffect, useState } from "react";
import Member from "../components/Member";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("https://api.atlasfreeshard.com/guild/FrogZ/members")
      .then((response) => response.json())
      .then((resData) => setMembers(resData));
  }, []);
  return (
    <main style={pageStyles}>
      {members
        .sort((curr, next) => {
          console.log(curr.realmPoints, next.realmPoints);
          return next.realmPoints - curr.realmPoints;
        })
        .map((member) => (
          <Member
            name={member.name}
            typeClass={member.class}
            realmRank={member.realmRank}
            lastName={member.lastname}
            race={member.race}
            level={member.level}
          />
        ))}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>FrogZ Atlas Herald</title>;

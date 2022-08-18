import React from "react";
import { container, dateCss } from "./RvrEvent.module.css";

const RvrEvent = ({ info, date }) => {
  return (
    <div className={container}>
      <span className={dateCss}>{date}</span> {info}
    </div>
  );
};

export default RvrEvent;

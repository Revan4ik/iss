import React from "react";
import IssPersonal from "../components/iss-personal/iss-personal";
import Map from "../components/map/map";
import Time from "../components/time/time";
import "./main-page.scss";

export const MainPage = () => {
  return (
    <>
      <Map />
      <div className="clock-person">
        <Time />
        <IssPersonal />
      </div>
    </>
  );
};

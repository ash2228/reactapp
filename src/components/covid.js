import React, { useEffect, useState } from "react";
import "./covid.css";

export const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      setData(actualData.statewise[9]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h1 className="Head">🔴LIVE</h1>
      <div className="container">
        <div className="card card1">
          <h1 className="heading">CITY</h1>
          <h1 className="subHeading">{data.state}</h1>
        </div>
        <div className="card card2">
          <h1 className="heading">ACTIVE</h1>
          <h1 className="subHeading">{data.active}</h1>
        </div>
        <div className="card card3">
          <h1 className="heading">CONFIRMED</h1>
          <h1 className="subHeading">{data.confirmed}</h1>
        </div>
        <div className="card card4">
          {" "}
          <h1 className="heading">DEATHS</h1>
          <h1 className="subHeading">{data.deaths}</h1>
        </div>
        <div className="card card5">
          {" "}
          <h1 className="heading">STATE CODE</h1>
          <h1 className="subHeading">{data.statecode}</h1>
        </div>
        <div className="card card6">
          {" "}
          <h1 className="heading">STATE NOTES</h1>
          <h1 className="subHeading st">{data.statenotes}</h1>
        </div>
      </div>
    </>
  );
};
export default Covid;

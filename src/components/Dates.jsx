import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDateRange } from "react-icons/md";
import { changeDate, leavechangeDate } from "../features/home";
import { Link } from "react-router-dom";
import "./Page.css";
import EnterDate from "./EnterDate";
import ExitDate from "./ExitDate"; 

const Page = () => {
  const dispatch = useDispatch();
  const {
    enrtyDate,
    exitDate,
    day,
    month,
    year,
    leaveday,
    leaveMonth,
    leaveyear,
  } = useSelector((state) => state.home);

  return (
    <div className="page-container">
      <h1 className="page-title">Airbnb</h1>
      <div className="date-container">
        <div className="date-box">
          <span className="date-label">Entry Date</span>
          <div className="date-display">
            {day < 10 ? `0${day}` : day}.{month < 10 ? `0${month}` : month}.{year}
            <MdDateRange className="date-icon" onClick={() => dispatch(changeDate())} />
          </div>
          {enrtyDate && <EnterDate />}
        </div>
        <div className="date-box">
          <span className="date-label">Leave Date</span>
          <div className="date-display">
            {leaveday < 10 ? `0${leaveday}` : leaveday}.{leaveMonth < 10 ? `0${leaveMonth}` : leaveMonth}.{leaveyear}
            <MdDateRange className="date-icon" onClick={() => dispatch(leavechangeDate())} />
          </div>
          {exitDate && <ExitDate />}
        </div>
      </div>
    </div>
  );
};

export default Page;

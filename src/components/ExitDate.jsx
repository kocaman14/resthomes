import React from "react";
import { days, months, years } from "../features/details";
import { useDispatch, useSelector } from "react-redux";
import {
  leavesendDay,
  leavesendMonths,
  leavesendYears,
} from "../features/home";
import "./ExitDate.css"
const ExitDate = () => {
  const dispatch = useDispatch();
  const { exitDate, day, month, year, yearindex, leaveMonth, leaveyear } =
    useSelector((state) => state.home);

  return (
    <div className="exit-date-container">
      {exitDate && (
        <div className="date-box">
          <h3 className="date-title">Select Day</h3>
          <div className="date-buttons">
            {days.map((dates, index) => (
              <button
                className="date-button"
                disabled={
                  year < leaveyear
                    ? true
                    : month < leaveMonth
                    ? true
                    : index < day
                    ? true
                    : false
                }
                key={index}
                onClick={() => dispatch(leavesendDay(dates))}
              >
                {dates}
              </button>
            ))}
          </div>
        </div>
      )}

      {exitDate && (
        <div className="date-box">
          <h3 className="date-title">Select Month</h3>
          <div className="date-buttons">
            {months.map((monthName, index) => (
              <button
                className="date-button"
                key={index}
                disabled={year < leaveyear ? true : index + 1 < month ? true : false}
                onClick={() => dispatch(leavesendMonths(monthName))}
              >
                {monthName}
              </button>
            ))}
          </div>
        </div>
      )}

      {exitDate && (
        <div className="date-box">
          <h3 className="date-title">Select Year</h3>
          <div className="date-buttons">
            {years.map((yearValue, index) => (
              <button
                className="date-button"
                key={index}
                disabled={index < yearindex}
                onClick={() => dispatch(leavesendYears({ years: yearValue, index }))}
              >
                {yearValue}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExitDate;

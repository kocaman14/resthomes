import React from "react";
import { days, months, years } from "../features/details";
import { useDispatch, useSelector } from "react-redux";
import { sendDay, sendMonths, sendYears } from "../features/home";
import "./EnterDate.css"

const EnterDate = () => {
  const dispatch = useDispatch();
  const { enrtyDate } = useSelector((state) => state.home);
  return (
    <div className="enter-date-container">
      {enrtyDate && (
        <div className="date-box">
          <h3 className="date-title">Select Day</h3>
          <div className="date-buttons">
            {days.map((dates, index) => (
              <button
                className="date-button"
                key={index}
                onClick={() => dispatch(sendDay(dates))}
              >
                {dates}
              </button>
            ))}
          </div>
        </div>
      )}

      {enrtyDate && (
        <div className="date-box">
          <h3 className="date-title">Select Month</h3>
          <div className="date-buttons">
            {months.map((monthName, index) => (
              <button
                className="date-button"
                key={index}
                onClick={() => dispatch(sendMonths(monthName))}
              >
                {monthName}
              </button>
            ))}
          </div>
        </div>
      )}

      {enrtyDate && (
        <div className="date-box">
          <h3 className="date-title">Select Year</h3>
          <div className="date-buttons">
            {years.map((yearValue, index) => (
              <button
                className="date-button"
                key={index}
                onClick={() => dispatch(sendYears({ years: yearValue, index }))}
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

export default EnterDate;

import React from 'react'
import { days, months, years } from '../features/details'
import { useDispatch, useSelector } from 'react-redux'
import { MdDateRange } from "react-icons/md";
import {
  changeDate,
  sendDay,
  sendMonths,
  sendYears,
  leavechangeDate,
  leavesendDay,
  leavesendMonths,
  leavesendYears
} from '../features/home';
import aparts from '../features/aparts';
const dateSelectionStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

const flexStyle = {
  display: "flex",
  gap: "20px",
  marginTop: "20px"
};

const flexItemStyle = {
  flex: "1"
};

const Page = () => {
  const dispatch = useDispatch();
  const {
    enrtyDate,
    exitDate,
    day,
    month,
    year,
    yearindex,
    leaveday,
    leaveMonth,
    leaveyear,
    selectedHotel
  } = useSelector((state) => state.home);


  const renderHotelList = (hotelList) => {
    return hotelList.map((build) => (
      <li key={build.id}>
        <p>Rate: {build.id}</p>
        <p>Title: {build.title}</p>
        <p>Description: {build.description}</p>
        <p>Price: {build.price}$</p>
        <img style={{width:"300px"}} src={build.image} alt={build.title} />
        <br></br>
        <button>Details</button>
      </li>
    ));
  };

  return (
    <>
      <div>
        <h1>Hotel Rooms</h1>

        <span>Entry Date</span>
        <div>
          {day < 10 ? `0${day}` : day}.{month < 10 ? `0${month}` : month}.{year}
          <MdDateRange style={{ marginLeft: "10px" }} onClick={() => dispatch(changeDate())} />
        </div>
        <div style={flexStyle}>
          <div style={flexItemStyle}>
            {enrtyDate && (
              <div style={dateSelectionStyle}>
                <label>Day</label>
                {days.map((dates, index) => (
                  <button key={index} onClick={() => dispatch(sendDay(dates))}>{dates}</button>
                ))}
              </div>
            )}
          </div>
          <div style={flexItemStyle}>
            {enrtyDate && (
              <div style={dateSelectionStyle}>
                <label>Month</label>
                {months.map((months, index) => (
                  <button key={index} onClick={() => dispatch(sendMonths(months))}>{months}</button>
                ))}
              </div>
            )}
          </div>
          <div style={flexItemStyle}>
            {enrtyDate && (
              <div style={dateSelectionStyle}>
                <label>Year</label>
                {years.map((years, index) => (
                  <button key={index} onClick={() => dispatch(sendYears({ years, index }))}>{years}</button>
                ))}
              </div>
            )}
          </div>
        </div>

        <span>Leave Date</span>
        <div>
          {leaveday < 10 ? `0${leaveday}` : leaveday}.{leaveMonth < 10 ? `0${leaveMonth}` : leaveMonth}.{leaveyear}
          <MdDateRange style={{ marginLeft: "10px" }} onClick={() => dispatch(leavechangeDate())} />
        </div>
        <div style={flexStyle}>
          <div style={flexItemStyle}>
            {exitDate && (
              <div style={dateSelectionStyle}>
                <label>Day</label>
                {days.map((dates, index) => (
                  <button
                    disabled={year < leaveyear ? "" : month < leaveMonth ? "" : index < day ? "true" : ""}
                    key={index}
                    onClick={() => dispatch(leavesendDay(dates))}
                  >
                    {dates}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div style={flexItemStyle}>
            {exitDate && (
              <div style={dateSelectionStyle}>
                <label>Month</label>
                {months.map((months, index) => (
                  <button
                    key={index}
                    disabled={year < leaveyear ? "" : index + 1 < month ? "true" : ""}
                    onClick={() => dispatch(leavesendMonths(months))}
                  >
                    {months}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div style={flexItemStyle}>
            {exitDate && (
              <div style={dateSelectionStyle}>
                <label>Year</label>
                {years.map((years, index) => (
                  <button
                    key={index}
                    disabled={index < yearindex}
                    onClick={() => dispatch(leavesendYears({ years, index }))}
                  >
                    {years}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <ul>
            {selectedHotel.length > 0 ? renderHotelList(selectedHotel) : renderHotelList(aparts)}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Page;

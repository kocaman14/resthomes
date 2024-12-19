import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDateRange } from "react-icons/md";
import { changeDate, details, leavechangeDate,spaceClick} from "../features/home";
import aparts from "../features/aparts";
import { Link } from "react-router-dom";
import "./Page.css";
import Dates from "./Dates";

const Page = () => {
  const dispatch = useDispatch();
  const { selectedHotel } = useSelector((state) => state.home);

  const renderHotelList = (hotelList) => {
    return hotelList.map((build, index) => (
      <li key={build.id} className="hotel-card">
        <p className="hotel-title">{build.title}</p>
        <p className="hotel-description">{build.description}</p>
        <p className="hotel-price">{build.price}$ /night</p>
        <img className="hotel-image" src={build.image} alt={build.title} />
        <Link to={`/details/${build.title}`}>
          <button
            className="details-button"
            onClick={() => dispatch(details(build.id))}
          >
            Details
          </button>
        </Link>
      </li>
    ));
  };

  return (
    <>
      <div className="page-container" onClick={()=>dispatch(spaceClick())}>
        <Dates />
        <div className="hotel-list-container">
          <ul>
            {selectedHotel.length > 0
              ? renderHotelList(selectedHotel)
              : renderHotelList(aparts)}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;

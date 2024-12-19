import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './DetailsHotel.css';
import { Link } from 'react-router-dom';

const DetailsHotel = () => {
  const { detailspage } = useSelector((state) => state.home);

  return (
    <div className="details-container">
      {detailspage &&
        detailspage.map((build) => (
          <div key={build.id} className="details-card">
            <div className="details-header">
              <h3>{build.title}</h3>
              <p className="rate">Rate: {build.id}</p>
            </div>
            <img
              className="details-image"
              src={build.image}
              alt={build.title}
            />
            <div className="details-body">
              <p className="description">{build.description}</p>
              <p className="price">{build.price}$ / night</p>
            </div>
            <Link to="/"><button className="details-button" >Home</button></Link>
          </div>
        ))}
    </div>
  );
};

export default DetailsHotel;

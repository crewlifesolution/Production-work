import React from "react";

//Imported icons
import { HiOutlineLocationMarker } from "react-icons/hi";

const search = () => {
  return (
    <div className="search container search">
      <div className="sectionContainer grid">
        <div className="btns flex">
          <div className="singlebtn">
            <span>Pilots</span>
          </div>

          <div className="singlebtn">
            <span>Air Crew</span>
          </div>

          <div className="singlebtn">
            <span>Engineers</span>
          </div>

          <div className="singlebtn">
            <span>Staff</span>
          </div>
        </div>

        <div className="searchInputs flex">
          {/*single input*/}
          <div className="singleInput flex">
            <div className="iconsDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Service</h4>
              <input type="text" placeholder="what do you want to search?" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default search;

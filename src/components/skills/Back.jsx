import React from "react";
import { LuBadgeCheck } from "react-icons/lu";

const Back = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title"></h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck />
            <div>
              <h3 className="skills__name"></h3>
              <span className="skills__level"></span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck />
            <div>
              <h3 className="skills__name"></h3>
              <span className="skills__level"></span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck />
            <div>
              <h3 className="skills__name"></h3>
              <span className="skills__level"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Back;

import React from "react";
import "./Updates.css";
import img1 from "../../imgs/img1.png";
import img2 from "../../imgs/img2.png";
import img3 from "../../imgs/img3.png";

function Updates() {
  return (
    <div className="updates">
      <div className="update">
        <img src={img1} alt="" />
        <div className="items">
          <div>
            <p className="noti">
              <span>Itachi Uchiha</span> has ordered Apple Smart watch 2500mh battery.
            </p>
          </div>
          <span className="time">25 seconds ago</span>
        </div>
      </div>
      <div className="update">
        <img src={img2} alt="" />
        <div className="items">
          <div>
            <p className="noti">
              <span>James Bond</span> has received Samsung gadget for charging battery.
            </p>
          </div>
          <span className="time">30 minutes ago</span>
        </div>
      </div>
      <div className="update">
        <img src={img3} alt="" />
        <div className="items">
          <div>
            <p className="noti">
              <span>Mikasa Ackerman</span> has ordered Apple smart watch, samsung Gear 2500mh battery.
            </p>
          </div>
          <span className="time">2 hours ago</span>
        </div>
      </div>
    </div>
  );
}

export default Updates;

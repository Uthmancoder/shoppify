import React from "react";

const NavBar = () => {
  return (
    <div>
      <div>
        <ul>
          <li className="font-semibold text-xs">Account</li>
          <li className="font-semibold text-xs">Track Order</li>
          <li className="font-semibold text-xs">Support</li>
        </ul>
        <div>
          <select name="location" id=""></select>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

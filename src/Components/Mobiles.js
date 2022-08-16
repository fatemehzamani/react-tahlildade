import React from "react";
import MobileList from "./MobileList";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

const Mobiles = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const searchInputChangeLinstener = (e) => {
    let filter = e.target.value;
    setSearchParam({ filter });
  };
  return (
    <div>
      <input
        value={searchParam.get("filter")}
        onChange={searchInputChangeLinstener}
      />
      {MobileList.filter((item) => {
        let filter = searchParam.get("filter");
        if (!filter) return true;
        let name = item.name.toLowerCase();
        return name.startsWith(filter.toLowerCase());
      }).map((item) => (
        <div>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "" };
            }}
            to={`./${item.id}`}
          >
            {`name: ${item.name} price :${item.price}`}
          </NavLink>
        </div>
      ))}

      <Outlet />
    </div>
  );
};
//localhost:3000/Product/Mobiles/3
export default Mobiles;

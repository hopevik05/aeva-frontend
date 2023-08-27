import { useState } from "react";
import arrow from "../../../assets/icons/arrow-side.svg";
import Button from "../buttons/button";

function SidebarSubmenu({ menu, panelName }: { menu: any; panelName: string }) {
  const [isActive, setIsActive] = useState(true);
  return (
    <li>
      <Button
        className="flex px-6 w-full justify-between"
        onClick={() => setIsActive(!isActive)}
      >
        <p className="sidebar-group text-lg mb-3">{panelName}</p>
        <img
          src={arrow}
          className={`w-2 ${!isActive ? "-rotate-90" : "rotate-90"}`}
          alt="arrow"
        />
      </Button>
      {isActive && (
        <ul className="space-y-1">
          {menu.map(({ current, name, activeIcon, icon, onClick }: any) => (
            <li key={name}>
              <Button
                className={`${
                  current ? "sidebar_active" : ""
                } w-full pl-5 gap-x-3 flex sidebar_item items-center relative`}
                onClick={onClick}
              >
                <div className="w-10 px-auto items-center h-10 flex justify-center -mr-2">
                  <img src={current ? activeIcon : icon} alt="icon" />
                </div>
                {name}
                {current && (
                  <div className="absolute right-0 w-1 h-full sidebar_item_border" />
                )}
              </Button>
            </li>
          ))}
        </ul>
      )}
      <div className="border-b border-gray700 mx-6 mb-6 mt-3" />
    </li>
  );
}
export default SidebarSubmenu;

import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { PiStudent, PiUserList } from "react-icons/pi";
import { RiParentLine } from "react-icons/ri";
import { LuUserCog } from "react-icons/lu";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LuPackagePlus } from "react-icons/lu";
import { BsShopWindow } from "react-icons/bs";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openStudenttab, setOpenStudentTab] = useState(false);
  const [openParentstab, setOpenParentsTab] = useState(false);
  const [openVendorsTab, setOpenVendorsTab] = useState(false)

  const handleToggle = () => {
    setOpenMenu(!openMenu);
  };
  const handleToggleStudentTab = () => {
    setOpenStudentTab(!openStudenttab);
  };
  const handleToggleParentTab = () => {
    setOpenParentsTab(!openParentstab);
  };
  const handleToggleVendorsTab = () => {
    setOpenVendorsTab(!openVendorsTab)
  }

  return (
    <div className="hidden md:block min-h-[91vh] bg-white p-2 shadow-r-lg">
      <h1 className="text-center text-lg font-semibold my-2">Menu-Items</h1>
      {/* Dashboard tab */}
      <ul className="mb-1">
        <NavLink to={"dashboard-home"}>
          <li className="flex items-center gap-2 p-2 bg-[#4D365B] rounded-md">
            <MdOutlineDashboard size={22} color="#fff"/>
            <span className="text-md text-white">Dashboard</span>
          </li>
        </NavLink>
      </ul>
      {/* Schools tab */}
      <ul className="mb-1">
        <NavLink to={"schools"}>
          <li className="flex items-center gap-2 p-2 bg-[#4D365B] rounded-md">
            <FaRegBuilding size={22}color="#fff" />
            <span className="text-md text-white">Schools</span>
          </li>
        </NavLink>
      </ul>
      {/* Teachers tab */}
      <ul className="mb-1">
        <li
          className="  p-2 bg-[#4D365B] rounded-md"
          onClick={() => handleToggle()}
        >
          <div className={"flex justify-between"}>
            <div className="flex items-center gap-2 ">
              <GrUserManager size={22} color="#fff" />
              <span className="text-md text-white">Teachers</span>
            </div>
            {openMenu ? <GoChevronUp size={22} color="#fff" /> : <GoChevronDown size={22}  color="#fff"/>}
          </div>
        </li>
        {openMenu ? (
          <div className=" rounded-md bg-gray-300 p-[6px]">
           
            <ul>
              <NavLink to={"teachers-list"}>
                <li className="flex items-center gap-2 cursor-pointer p-1 bg-[#b997cd] rounded-md m-b text-[#4D365B]">
                  <PiUserList size={22} color="#4D365B" />
                  Teachers List
                </li>
              </NavLink>
            </ul>
          </div>
        ) : null}
      </ul>
      {/* Students tab */}
      <ul className="mb-1">
        <li
          className="  p-2 bg-[#4D365B] rounded-md"
          onClick={() => handleToggleStudentTab()}
        >
          <div className={"flex justify-between"}>
            <div className="flex items-center gap-2 ">
              <PiStudent size={22} color="#fff" />
              <span className="text-md text-white">Students</span>
            </div>
            {openStudenttab ? (
              <GoChevronUp size={22} color="#fff" />
            ) : (
              <GoChevronDown size={22} color="#fff" />
            )}
          </div>
        </li>
        {openStudenttab ? (
          <div className="rounded-md bg-gray-300  p-2 ">
            <ul>
              <NavLink to={"students-list"}>
                <li className="flex items-center gap-2 cursor-pointer p-1 bg-[#b997cd] rounded-md m-b text-[#4D365B]">
                  <PiStudent size={22} color="#4D365B" />
                  Students List
                </li>
              </NavLink>
            </ul>
          </div>
        ) : null}
      </ul>
      {/* Parents tab */}
      <ul className="mb-1">
        <li
          className="  p-2 bg-[#4D365B] rounded-md"
          onClick={() => handleToggleParentTab()}
        >
          <div className={"flex justify-between"}>
            <div className="flex items-center gap-2 ">
              <RiParentLine size={22} color="#fff" />
              <span className="text-md text-white">Parents</span>
            </div>
            {openParentstab ? (
              <GoChevronUp size={22} color="#fff"/>
            ) : (
              <GoChevronDown size={22} color="#fff" />
            )}
          </div>
        </li>
        {openParentstab ? (
          <div className="rounded-md bg-gray-300  p-2 ">
            <ul>
              <NavLink to={"parents-list"}>
                <li className="flex items-center gap-2 cursor-pointer p-1 bg-[#b997cd] rounded-md m-b text-[#4D365B]">
                  <RiParentLine size={22} color="#4D365B" />
                  Parents List
                </li>
              </NavLink>
            </ul>
          </div>
        ) : null}
      </ul>
 {/* Add Head of dept. tab */}
 <ul className="mb-1">
        <NavLink to={"head-of-dept-list"}>
          <li className="flex items-center gap-2 p-2 bg-[#4D365B] rounded-md">
            <LuUserCog size={22} color="#fff"/>
            <span className="text-md text-white">Head Of Dept.</span>
          </li>
        </NavLink>
      </ul>
        {/* Vendors tab */}
        <ul className="mb-1">
        <li
          className="  p-2 bg-[#4D365B] rounded-md"
          onClick={() => handleToggleVendorsTab()}
        >
          <div className={"flex justify-between"}>
            <div className="flex items-center gap-2 ">
              <BsShopWindow size={22} color="#fff" />
              <span className="text-md text-white">Vendors</span>
            </div>
            {openVendorsTab ? (
              <GoChevronUp size={22} color="#fff"/>
            ) : (
              <GoChevronDown size={22} color="#fff" />
            )}
          </div>
        </li>
        {openVendorsTab ? (
          <div className="rounded-md bg-gray-300  p-2 ">
            <ul>
              <NavLink to={"product-list"}>
                <li className="flex items-center gap-2 cursor-pointer p-1 bg-[#b997cd] rounded-md m-b text-[#4D365B]">
                  <LuPackagePlus size={22} color="#4D365B" />
                  Product List
                </li>
              </NavLink>
            </ul>
          </div>
        ) : null}
      </ul>
      {/* {menuItems.map((item, index) => (
        <ul key={index} className="mb-2">
          <li
            className="flex items-center justify-between gap-2 p-2 bg-blue-200 rounded-md relative cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <div className="flex gap-2 items-center justify-between">
              <FaRegBuilding size={22} />
              <span className="text-md">{item.title}</span>
            </div>
            {openMenuIndex === index ? (
              <GoChevronUp size={22} />
            ) : (
              <GoChevronDown size={22} />
            )}
          </li>
          {openMenuIndex === index && ( 
            <div className="h-8 rounded-md bg-gray-300  p-2  ">
              Content for {item.title}
            </div>
          )}
        </ul>
      ))} */}
    </div>
  );
};

export default Sidebar;

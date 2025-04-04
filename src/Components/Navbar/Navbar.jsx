import React, { useState } from "react";
import Logo from "../../assets/logo.webp";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import Location from "../Location/Location";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },
];

export const DropdownLinks = [
  {
    name: "Our Services",
    link: "/service",
  },
  {
    name: "Top Brands",
    link: "/top-brands",
  },
  {
    name: "Location",
    link: "/location",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
        <div
          style={{
            background: "linear-gradient(to right, #0287a8, #00c3c7)",
          }}
          className=" text-white "
        >
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm">20% off on next booking</p>
              <p>mobile no. +91 123456789</p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4  font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="" className="h-16 rounded-full" />
              </Link>
              {/* <span>TCJ Tourism</span> */}
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 ">
                <li className="py-4">
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/blogs" activeClassName="active">
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/best-places" activeClassName="active">
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      <li>
                        <NavLink
                          className="inline-block w-full rounded-md p-2 hover:bg-#0287a8/20"
                          to="/service"
                          activeClassName="active"
                        >
                          Our Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="inline-block w-full rounded-md p-2 hover:bg-#0287a8/20"
                          to="/top-brands"
                          activeClassName="active"
                        >
                          Top Brands
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="inline-block w-full rounded-md p-2 hover:bg-#0287a8/20"
                          to="/location"
                          activeClassName="active"
                        >
                          Location
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <button
                style={{
                  background: "linear-gradient(to right, #0287a8, #00c3c7)",
                }}
                className="text-white px-3 py-1 rounded-full transition-all duration-500 hover:opacity-80"
                onClick={handleOrderPopup}
              >
                Book Now
              </button>
              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;

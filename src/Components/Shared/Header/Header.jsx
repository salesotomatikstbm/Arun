import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { List, ArrowRight } from "react-bootstrap-icons";

import Drawer from "../Drawer/Drawer";
import logo from "../../../assets/img/logo/logo.png";

const menuList = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  // {
  //   id: 2,
  //   path: "/",
  //   section: "#about",
  //   name: "About",
  // },
  {
    id: 3,
    path: "/",
    section: "#projects",
    name: "Work",
  },
  {
    id: 4,
    path: "/all-services",
    section: "",
    name: "Services",
    // dropDown: [
    //   {
    //     id: 1,
    //     path: "/all-services",
    //     name: "Services",
    //   },
    //   {
    //     id: 2,
    //     path: "/service-details",
    //     name: "Service Details",
    //   },
    // ],
  },
  // {
  //   id: 5,
  //   path: "/",
  //   section: "#testimonial",
  //   name: "Testimonial",
  // },
  // {
  //   id: 6,
  //   path: "/",
  //   section: "#blog",
  //   name: "Blog",
  //   dropDown: [
  //     {
  //       id: 1,
  //       path: "/all-blog",
  //       name: "Blog",
  //     },
  //     {
  //       id: 2,
  //       path: "/blog-details",
  //       name: "Blog Details",
  //     },
  //   ],
  // },
  {
    id: 7,
    path: "/contact",
    name: "Contact",
  },
  {
    id: 8,
    path: "/aruna",
   
  },
];

const Header = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [dropDownId, setDropDownId] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;

    scrollTop >= 35
      ? header.classList.add("menu-fixed", "animated", "fadeInDown")
      : header.classList.remove("menu-fixed");
  };

  const handleHeaderToggle = () => {
    setMenuActive(!menuActive);
  };

  const handleSubMenu = (id) => {
    setDropDownId(id);
  };

  return (
    <header className={`header-section `}>
      <div className="container">
        <div className="header-wrapper">
          <div className="main__logo">
            <Link to={"/"} className="logo">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className={`main-menu ${menuActive ? "active" : ""}`}>
            {menuList.map(({ id, name, path, dropDown, section }) => {
              return (
                <li key={id} onClick={() => handleSubMenu(id)}>
                  <HashLink smooth to={`${path}${section ? section : ""}`}>
                    {name}
                  </HashLink>
                  {dropDown?.length && (
                    <ul className={`sub-menu ${dropDownId === id ? "sub-menu_active" : ""}`}>
                      {dropDown.map(({ id, name, path }) => {
                        return (
                          <li key={id}>
                            <HashLink smooth to={path}>
                              {name}
                            </HashLink>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="menu__components d-flex align-items-center">
            <Link
              to="https://www.canva.com/design/DAGPZ28zKoU/2vFqtbfnpojJB_VtOBJMEw/edit?utm_content=DAGPZ28zKoU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              className="d-flex fw-500 cmn--btn align-items-center gap-2"
              download
            >
              <span className="get__text">Resume</span>
              <span>
                <ArrowRight className="fz-20" />
              </span>
            </Link>

            <div
              onClick={handleHeaderToggle}
              className={`header-bar d-lg-none ${menuActive ? "active" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setIsSidebarActive(true)}
              className="remove__click"
            >
              <List className="icon" />
            </div>
          </div>
        </div>
      </div>
      <Drawer
        isSidebarActive={isSidebarActive}
        setIsSidebarActive={setIsSidebarActive}
      />
    </header>
  );
};

export default Header;

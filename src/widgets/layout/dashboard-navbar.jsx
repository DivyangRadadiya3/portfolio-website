import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  MobileNav,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Collapse,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid"

import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "@/context";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  const [openNav, setOpenNav] = React.useState(false);
  // console.log();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <>
      <ul className="flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6" role="navigation">
        <Typography as="a" href="#" variant="small" color="blue-gray" className={`p-2 rounded-md font-normal hover:bg-gray-300 hover:shadow-sm transition duration-300 ease-in-out" ${pathname === "/dashboard#" ? "text-green-600" : "text-black"}`}>
          Home
        </Typography>
        <Typography as="a" href="#aboutUs" variant="small" color="blue-gray" className={`p-2 rounded-md font-normal hover:bg-gray-300 hover:shadow-sm transition duration-300 ease-in-out" ${pathname === "/dashboard#aboutUs" ? "text-green-600" : "text-black"}`}>
          About
        </Typography>
        <Typography as="a" href="#projects" variant="small" color="blue-gray" className={`p-2 rounded-md font-normal hover:bg-gray-300 hover:shadow-sm transition duration-300 ease-in-out" ${pathname === "/dashboard#projects" ? "text-green-600" : "text-black"}`}>
          Projects
        </Typography>
        <Typography as="a" href="#contactUs" variant="small" color="blue-gray" className={`p-2 rounded-md font-normal hover:bg-gray-300 hover:shadow-sm transition duration-300 ease-in-out" ${pathname === "/dashboard#contactUs" ? "text-green-600" : "text-black"}`}>
          Contact
        </Typography>
      </ul>
    </>
  );

  return (

    <Navbar
      color="white"
      className="rounded-b-xl transition-all sticky top-0 z-40 py-3 shadow-md shadow-blue-gray-500/5"
      fullWidth
      blurred={true}
    >
      <div className="flex flex-row justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Typography variant="h4" color="black">
            <a href="#">
              Divyang Radadiya
            </a>
          </Typography>
        </div>
        <div className="flex items-center">

          <div className="hidden md:block">
            {navList}
          </div>

          <IconButton
            variant="text"
            color="blue-gray"
            className="grid md:hidden mx-3"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            {openSidenav ? (
              <XMarkIcon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
            ) : (
              <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
            )}
          </IconButton>


        </div>
      </div>

      <Collapse open={openSidenav} className={openSidenav ? "mt-2" : ""} onClick={() => setOpenSidenav(dispatch, false)}>
        {navList}
      </Collapse>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;

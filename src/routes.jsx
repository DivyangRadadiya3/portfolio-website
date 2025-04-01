import {
  HomeIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { DashboardNavbar, Footer, Home, AboutUs, Projects, ContactUs } from "@/widgets/layout/index";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};


export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "dashboard-navbar",
        path: "/dashboard-navbar",
        element: <DashboardNavbar />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "AboutUs",
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "Projects",
        path: "/Projects",
        element: <Projects />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "ContactUS",
        path: "/ContactUS",
        element: <ContactUs />,
      },


    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

routes.displayName = "/src/widgets/layout/routes.jsx";

export default routes;

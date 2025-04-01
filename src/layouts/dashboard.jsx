import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  DashboardNavbar,
  Footer,
  Home,
  AboutUs,
  Projects,
  ContactUs,
} from "@/widgets/layout";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import { useEffect } from 'react';

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-blue-gray-50" data-aos="fade-up" data-aos-duration="1000">

      <DashboardNavbar />

      <div className="overflow-none">
        <Home data-aos="fade-down" data-aos-duration="1000" />
        <AboutUs data-aos="fade-down" data-aos-duration="1000" />
        <hr className="mx-6 border-t-2 border-teal-400 my-4" />
        <Projects data-aos="fade-up" data-aos-duration="1000" />
        <hr className="mx-6 border-t-2 border-teal-400 my-4" />

        <ContactUs data-aos="fade-down" data-aos-duration="1000" />
      </div>
      <hr className=" border-t border-gray-800 dark:border-gray-700" />
      <div className="text-blue-gray-600" >
        <Footer />
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/widgets/layout/dashboard.jsx";
export default Dashboard; 
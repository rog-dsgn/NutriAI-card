import NavbarDesk from "../../components/layout/desktop/NavbarDesk";
import HeaderMobile from "../../components/layout/mobile/HeaderMobile";
import Navbar from "../../components/layout/Navbar";

const DashboardView = () => {
  return (
    <section className="relative w-full h-full bg-gray-200">
      <Navbar />
      <HeaderMobile />
    </section>
  );
};

export default DashboardView;

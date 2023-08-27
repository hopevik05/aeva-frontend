import { useNavigate } from "react-router-dom";
import iconRequestActive from "../../../assets/icons/sidebar/batch-buy-active.svg";
import iconRequest from "../../../assets/icons/sidebar/batch-buy.svg";
import iconDashboardActive from "../../../assets/icons/sidebar/feature-active.svg";
import iconDashboard from "../../../assets/icons/sidebar/feature.svg";
import { APP_ROUTES } from "../../constants";
import { isDashboardPage, isRequestPage } from "../../utils";
import SidebarSubmenu from "./sidebar-sub-menu";

function SidebarMenu({ setSidebarOpen }: { setSidebarOpen: any }) {
  const navigate = useNavigate();
  const products = [
    {
      name: "Dashboard",
      onClick: () => {
        navigate(APP_ROUTES.dashboard);
        setSidebarOpen(false);
      },
      icon: iconDashboard,
      activeIcon: iconDashboardActive,
      current: isDashboardPage(),
    },
    {
      name: "Request",
      onClick: () => {
        navigate(APP_ROUTES.request);
        setSidebarOpen(false);
      },
      icon: iconRequest,
      activeIcon: iconRequestActive,
      current: isRequestPage(),
    },
  ];

  return (
    <ul className="flex flex-1 flex-col sm:mt-8 mt-2">
      <SidebarSubmenu menu={products} panelName="Products" />
    </ul>
  );
}
export default SidebarMenu;

import "../../assets/css/dashboard/index.scss";
import MainAppLayout from "../../common/components/layouts/main-app-layout";
import initDashboard from "../../logic/dashboard/helper/initDashboard";
import Downloads from "./components/downloads";

function DashboardPage() {
  initDashboard();  
  return (
    <MainAppLayout>
      <Downloads />
    </MainAppLayout>
  );
}
export default DashboardPage;

import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../common/hooks/useState";
import { RootState } from "../../../../common/store";
import { DASHBOARD_TABS } from "../../../../logic/dashboard/constants";
import { setActiveTab } from "../../../../logic/dashboard/store";

function Tabs() {
  const { activeTab } = useSelector((state: RootState) => state.dashboard);
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-center items-center">
      {DASHBOARD_TABS.map(({ key, label }) => (
        <button
          type="button"
          className={`h-7 w-20 font-semibold text-sm text-center flex justify-center items-center ${
            activeTab === key ? "active_category" : "category"
          }`}
          onClick={() => dispatch(setActiveTab(key))}
          key={key}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
export default Tabs;

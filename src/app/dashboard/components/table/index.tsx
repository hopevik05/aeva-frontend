import Axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import baseApiUrl from "../../../../common/config";
import { RootState } from "../../../../common/store";
import { DashboardTabs } from "../../../../logic/dashboard/enums";
import { DownloadTask } from "../../../../logic/dashboard/types";
import TableRow from "./table-row";

function Table() {
  const { downloads, activeTab } = useSelector(
    (state: RootState) => state.dashboard
  );
  const download = async (pid: string, type: string) => {
    try {
      const { data } = await Axios({
        url: `${baseApiUrl}/lidar/download/${pid}`,
        method: "get",
        responseType: "blob",
      });
      const href = URL.createObjectURL(data);
      const link = document.createElement("a");
      link.href = href;
      const fileType = type === "Excel" ? "xlsx" : type;
      console.log(fileType), type;

      link.setAttribute("download", `${pid}.${fileType}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    } catch (error: any) {
      toast.error(error.message || "Something went wrong, try again!");
      console.log("download", error);
    }
  };
  const data =
    activeTab === DashboardTabs.active
      ? downloads
      : downloads.filter((item: DownloadTask) => item.status === "completed");

  return (
    <div>
      <ToastContainer />
      <div className="trx_table_head w-full px-8 h-16 rounded flex text-center items-center mb-4 justify-start font-normal text-sm text-white">
        <p className="w-28">PID</p>
        <p className="w-64">Purpose</p>
        <p className="w-56">Created at</p>
        <p className="w-56">Completed at</p>
        <p className="w-28">Data</p>
        <p className="w-28">Size</p>
        <p className="w-32">Status</p>
      </div>
      <div className="">
        {data.map((rowInfo: DownloadTask) => (
          <TableRow download={download} key={rowInfo.pid} rowInfo={rowInfo} />
        ))}
      </div>
    </div>
  );
}
export default Table;

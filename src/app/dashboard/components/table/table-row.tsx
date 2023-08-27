import moment from "moment";
import downloadIcon from "../../../../assets/icons/download.svg";
import Button from "../../../../common/components/buttons/button";
import { Status } from "../../../../common/enums";
import { DownloadTask } from "../../../../logic/dashboard/types";

function TableRow({
  rowInfo,
  download,
}: {
  rowInfo: DownloadTask;
  download: any;
}) {
  return (
    <div className="trx_table_row px-8 w-full text-center rounded flex items-center justify-start font-normal text-sm text-white mb-3">
      <p className="w-28">{rowInfo.pid}</p>
      <p className="w-64">{rowInfo.purpose}</p>
      <p className="w-56">
        {moment(rowInfo.startTime).format("DD-MM-YY, HH:MM")}
      </p>
      <div className="w-56">
        {rowInfo.endTime
          ? moment(rowInfo.endTime).format("DD-MM-YY, HH:MM")
          : "NA"}
      </div>
      <p className="w-28">
        <p className="font-bold trx_table_row_amount text-sm">
          <span className="text-sm">{rowInfo.data}</span>
          {rowInfo.type}
        </p>
      </p>
      <p className="w-28">
        <p className="font-bold trx_table_row_amount text-sm">
          <span className="text-sm">500</span>MB
        </p>
      </p>
      <p className="w-32">
        {rowInfo.status === Status.completed ? (
          <span className="inline-flex px-2 items-center gap-x-1.5 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
            <svg
              className="h-1.5 w-1.5 fill-green-500"
              viewBox="0 0 6 6"
              aria-hidden="true"
            >
              <circle cx={3} cy={3} r={3} />
            </svg>
            Completed
          </span>
        ) : (
          <span className="inline-flex items-center gap-x-1.5 rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
            <svg
              className="h-1.5 w-1.5 fill-yellow-500"
              viewBox="0 0 6 6"
              aria-hidden="true"
            >
              <circle cx={3} cy={3} r={3} />
            </svg>
            Preparing
          </span>
        )}
      </p>
      {rowInfo.status === Status.completed && (
        <Button
          onClick={() => download(rowInfo.pid, rowInfo.type)}
          className="flex items-center gap-x-2"
        >
          <img
            src={downloadIcon}
            alt="download"
            className="w-5 h-5 object-contain"
          />
        </Button>
      )}
    </div>
  );
}
export default TableRow;

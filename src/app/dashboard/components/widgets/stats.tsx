import { useSelector } from "react-redux";
import fees from "../../../../assets/icons/fees-saved.svg";
import volume from "../../../../assets/icons/volume-processed.svg";
import { Status } from "../../../../common/enums";
import { RootState } from "../../../../common/store";

function Stats() {
  const { downloads } = useSelector((state: RootState) => state.dashboard);

  const stats = [
    {
      title: "Open",
      value: downloads.filter((item: any) => item.status !== Status.completed)
        .length,
      img: volume,
    },
    {
      title: "Fulfilled",
      value: downloads.filter((item: any) => item.status === Status.completed)
        .length,
      img: fees,
    },
  ];
  return (
    <div className="flex justify-center text-center items-center gap-x-10">
      {stats?.map((item, index) => (
        <div key={`stats-${index}`}>
          <div className="flex justify-center items-center gap-x-1 mb-1">
            <img src={item.img} className="w-3 h-3" alt="stats" />
            <p className="font-normal text-xs filter_tab_stats_title">
              {" "}
              {item.title}{" "}
            </p>
          </div>
          <p className="text-base font-bold filter_tab_stats_value">
            {" "}
            {item.value}{" "}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Stats;

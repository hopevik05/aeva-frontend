import Table from "./table";
import Stats from "./widgets/stats";
import Tabs from "./widgets/tabs";

function Downloads() {
  return (
    <div className="px-8 py-24">
      <div className="flex justify-between items-center mb-4">
        <Tabs />
        <Stats />
      </div>
      <Table />
    </div>
  );
}
export default Downloads;

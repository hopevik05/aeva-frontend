import { ReactNode, useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

function MainAppLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="w-full grid-cols-small m-auto text-white grid">
      <div className="fixed inset-y-0 flex w-full flex-col">
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <Header setSidebarOpen={setSidebarOpen} />
        <div className="flex main-layout lg:ml-56 md:ml-0 ml-0 h-full overflow-y-auto border-gray700">
          {children}
        </div>
      </div>
    </div>
  );
}
export default MainAppLayout;

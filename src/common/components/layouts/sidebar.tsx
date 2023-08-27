import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import "../../../assets/css/sidebar.scss";
import logo from "../../../assets/logo_white.png";
import SidebarMenu from "./sidebar-menu";

const LOGO = (
  <div className="flex ml-5 mt-2.5 shrink-0 items-center">
    <a className="items-center ml-6 sm:ml-16" href="/">
      <img src={logo} className="w-12 h-12" alt="logo" />
    </a>
  </div>
);

export default function Sidebar({
  setSidebarOpen,
  sidebarOpen,
}: {
  setSidebarOpen: any;
  sidebarOpen: boolean;
}) {
  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={() => setSidebarOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute right-0 top-2 flex w-16 justify-center pt-5">
                    <button type="button" onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <span className="text-white">&#x2715;</span>
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col overflow-y-auto bg-gray-900 pb-2 ring-1 ring-white/10">
                  {LOGO}
                  <nav className="flex flex-1 mt-3 flex-col">
                    <SidebarMenu setSidebarOpen={setSidebarOpen} />
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-56 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col overflow-y-auto">
          {LOGO}
          <nav className="flex max-h-full mt-3 overflow-y-auto border-r border-gray700 flex-1">
            <SidebarMenu setSidebarOpen={setSidebarOpen} />
          </nav>
        </div>
      </div>
    </div>
  );
}

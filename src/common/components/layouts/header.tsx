import hamburger from "../../../assets/icons/hamburger-menu.svg";

function Header({ setSidebarOpen }: { setSidebarOpen: any }) {
  return (
    <div className="w-full border-b border-gray700 lg:px-24 py-5 px-4 flex justify-between lg:justify-end items-center">
      <div className="flex items-center shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <img className="w-8" src={hamburger} alt="hamburger" />
        </button>
      </div>
      <span className="relative inline-block">
        <img
          className="h-7 w-7 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <span className="absolute right-0 top-0 block h-2 w-2 rounded-full bg-green-400 ring-2 ring-white" />
      </span>
    </div>
  );
}
export default Header;

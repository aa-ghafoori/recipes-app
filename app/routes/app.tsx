import { NavLink, Outlet } from "@remix-run/react";
import classNames from "classnames";

export default function App() {
  return (
    <div className="p-6 md:w-[calc(100%-6rem)]">
      <h1 className="text-3xl md:text-4xl font-bold my-4">App</h1>
      <nav className="border-b-2 pb-3 mt-8 ">
        <NavLink
          className={({ isActive }) =>
            classNames(
              "text-lg md:text-xl font-semibold p-3 w-fit border-b-2 hover:text-gray-500 hover:border-b-primary-light",
              isActive && " border-b-primary"
            )
          }
          to={"pantry"}
        >
          Pantry
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

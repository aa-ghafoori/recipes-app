import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import {
  AppIcon,
  DiscoverIcon,
  HomeIcon,
  SettingsIcon,
} from "./components/icons";
import classNames from "classnames";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Recipe App" },
    { name: "description", content: "Welcome to Recipe App!" },
  ];
};

function App() {
  return (
    <div className="md:flex">
      <nav className="md:h-screen bg-primary">
        <ul className="flex justify-center md:flex-col">
          <AppNavLink to="/">
            <HomeIcon />
          </AppNavLink>
          <AppNavLink to="discover">
            <DiscoverIcon />
          </AppNavLink>
          <AppNavLink to="app">
            <AppIcon />
          </AppNavLink>
          <AppNavLink to="settings">
            <SettingsIcon />
          </AppNavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

type AppNavLinkProps = {
  children: React.ReactNode;
  to: string;
};

const AppNavLink = ({ children, to }: AppNavLinkProps) => (
  <li>
    <NavLink to={to}>
      {({ isActive }) => (
        <div
          className={classNames("text-white px-8 py-6 hover:bg-primary-light", {
            "bg-primary-light": isActive,
          })}
        >
          {children}
        </div>
      )}
    </NavLink>
  </li>
);

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <App />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

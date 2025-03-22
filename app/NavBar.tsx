"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoBugOutline } from "react-icons/io5";
import classNames from "classnames";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-base-200/30 backdrop-blur  flex items-center justify-between space-x-8 h-12 border-b px-10 pe-5 overflow-x-hidden">
      <NavBarLinks />
      <ModeToggle />
    </div>
  );
};

export default NavBar;

const ModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button className="flex items-center">
      <label className="flex cursor-pointer gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>{" "}
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
          onChange={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      </label>
    </button>
  );
};

const NavBarLinks = () => {
  const Links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  const currentPath = usePathname();

  return (
    <div className="flex items-center space-x-10">
      <Link href="/">
        <IoBugOutline size={32} />
      </Link>
      <ul className="flex items-center space-x-8">
        {Links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link
              href={href}
              className={classNames({
                "opacity-70": currentPath === href,
                "opacity-100": currentPath !== href,
              })}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

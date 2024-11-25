"use client";
import Link from "next/link";
import { MdMenu, MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
    const [title, setTitle] = useState('About me');
  const currentPath = usePathname();

useEffect(() => {
    setTitle(document.title);
}, [currentPath]);

  return (
    <nav className="flex items-center gap-6 justify-start md:justify-center bg-primary py-2 sm:py-4 px-6">
      <button className="sm:hidden">
      <MdMenu size={24}/>
      </button>
      <h1 className="sm:hidden">
        {title}
      </h1>
      <ul className="flex gap-6">
        <li className="hidden sm:block">
          <Link
            href="/"
            data-active={currentPath === "/"}
            className="data-[active=true]:underline"
          >
            About me
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="/project"
            data-active={currentPath === "/project"}
            className="data-[active=true]:underline"
          >
            Projects
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link href="/contact" 
          data-active={currentPath === "/contact"}
          className="flex gap-1 items-center data-[active=true]:underline">
            Contact
            <MdOutlineMailOutline />
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="https://github.com/ronneyrv"
            target="blank"
            className="flex gap-1 items-center"
          >
            GitHub
            <FaGithub />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

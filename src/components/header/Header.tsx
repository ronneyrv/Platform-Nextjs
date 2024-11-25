"use client";
import Link from "next/link";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";

export const Header = () => {
  const currentPath = usePathname();
  return (
    <nav className="flex items-center justify-center bg-primary py-4">
      <ul className="flex gap-6">
        <li>
          <Link
            href="/"
            data-active={currentPath === "/"}
            className="data-[active=true]:underline"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            href="/project"
            data-active={currentPath === "/project"}
            className="data-[active=true]:underline"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" 
          data-active={currentPath === "/contact"}
          className="flex gap-1 items-center data-[active=true]:underline">
            Contact
            <MdOutlineMailOutline />
          </Link>
        </li>
        <li>
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

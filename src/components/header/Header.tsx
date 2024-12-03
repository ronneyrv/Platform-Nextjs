"use client";
import Link from "next/link";
import { MdMenu, MdOutlineMailOutline } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const [title, setTitle] = useState("About me");
  const [drawer, setDrawer] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    setTitle(document.title);
    setDrawer(false);
  }, [currentPath]);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrawer(false);
      }
    };

    window.addEventListener('keydown',handle);
    return () => window.removeEventListener('keydown',handle);
  },[]);

  return (
    <>
    <nav className="flex items-center gap-6 justify-start fixed top-0 right-0 left-0 z-50 md:justify-center bg-primary py-2 sm:py-4 px-6">
      <button className="sm:hidden" onClick={() => setDrawer(true)}>
        <MdMenu size={24} />
      </button>

      <h1 className="sm:hidden">{title}</h1>

      <ul
        className="flex gap-6 items-center"
        tabIndex={drawer ? -1 : undefined}
      >
        <li
          data-active={currentPath === "/"}
          className="hidden sm:block data-[active=true]:bg-background px-4 py-1 rounded"
        >
          <Link href="/">About me</Link>
        </li>
        <li
          data-active={currentPath === "/project"}
          className="hidden sm:block data-[active=true]:bg-background px-4 py-1 rounded"
        >
          <Link href="/project">Projects</Link>
        </li>
        <li
          data-active={currentPath === "/contact"}
          className=" hidden sm:block data-[active=true]:bg-background px-4 py-1 rounded"
        >
          <Link href="/contact" className="flex gap-1 items-center">
            Contact
            <MdOutlineMailOutline />
          </Link>
        </li>
      </ul>

      <div
        data-open={drawer}
        tabIndex={drawer ? undefined : -1}
        onClick={() => setDrawer(false)}
        className="sm:hidden bg-gradient-to-r from-background fixed top-0 left-0 bottom-0 right-0 transition-transform data-[open=false]:-translate-x-full"
      >
        <ul
          className="flex gap-6 flex-col p-4 w-60 h-full bg-background"
          onClick={(e) => e.stopPropagation()}
        >
          <li
            data-active={currentPath === "/"}
            className="data-[active=true]:border-b-2"
          >
            <Link href="/">About me</Link>
          </li>
          <li
            data-active={currentPath === "/project"}
            className="data-[active=true]:border-b-2"
          >
            <Link href="/project">Projects</Link>
          </li>
          <li
            data-active={currentPath === "/contact"}
            className="data-[active=true]:border-b-2"
          >
            <Link href="/contact" className="flex gap-1 items-center">
              Contact
              <MdOutlineMailOutline />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="h-14 sm:h-20"/>
    </>
  );
};

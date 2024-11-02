
"use client";

import { Button, Navbar } from "flowbite-react";

export function NavBar() {
  return (
    <Navbar fluid rounded className="bg-[#6FD943] px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <Navbar.Brand href="#">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap uppercase tracking-wider font-extrabold text-2xl  dark:text-white "> TimeWise </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button color="transparent" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white" > Login </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className=" uppercase">
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Feature</Navbar.Link>
        <Navbar.Link href="#">FAQ</Navbar.Link>
        <Navbar.Link href="#">About us </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

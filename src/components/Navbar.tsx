"use client";


import NavbarMob from "@/components/NavbarMob";
import NavbarDesk from "@/components/NavbarDesk";
import { navItems } from "@/data";

const Navbar = () => {
  return (
    <>
      <div className="hidden lg:block">
        <NavbarDesk navItems={navItems} />
      </div>
      <div className="block lg:hidden">
        <NavbarMob navItems={navItems} />
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import { Divider, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";


export default function HeaderNavbar() {
  return (
    <>
    <Navbar position="static" shouldHideOnScroll className="bg-slate-900">
      <NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            <p className="font-bold text-inherit text-white text-2xl font-montserrat">Benjamin Gardiner</p>
          </Link>
        </NavbarItem>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white" href="#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link className="text-white" href="#projects" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    <Divider className="bg-amber-400 h-1" />
    </>
  );
}

import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const closeDropdown = () => setOpen(false);
  const openDropdown = () => setOpen(true);

  return (
    <>
      <Navbar
        variant="light"
        bg="light"
        expand="lg"
        expanded={isOpen}
        fixed="top"
      >
        <Nav.Link style={{ color: "black" }} href="/">
          Sean Low
        </Nav.Link>
        <Navbar.Toggle
          onClick={openDropdown}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/#/" onClick={closeDropdown}>
              Home
            </Nav.Link>
            <Nav.Link href="/#/modules/" onClick={closeDropdown}>
              Modules
            </Nav.Link>
            <Nav.Link href="/#/misc/" onClick={closeDropdown}>
              Misc
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;

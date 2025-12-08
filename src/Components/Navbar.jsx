"use client";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/NavbarUi";
import { useState, useEffect } from "react";

export function NavbarDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check user login state on mount
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsLoggedIn(!!role); // true if user exists
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Rooms", link: "/rooms" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" },
  ];


 

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />

          <div className="flex items-center gap-4">
            {!isLoggedIn ? (
              <>
                <Link to="/signin">
                  <NavbarButton variant="secondary">Sign In</NavbarButton>
                </Link>

                <Link to="/signup">
                  <NavbarButton variant="primary">Sign Up</NavbarButton>
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile">
                  <NavbarButton variant="primary">My Profile</NavbarButton>
                </Link>
              </>
            )}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}

            <div className="flex w-full flex-col gap-4 mt-4">
              {!isLoggedIn ? (
                <>
                  <Link to="/signin" onClick={() => setIsMobileMenuOpen(false)}>
                    <NavbarButton variant="primary" className="w-full">
                      Sign In
                    </NavbarButton>
                  </Link>

                  <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <NavbarButton variant="primary" className="w-full">
                      Sign Up
                    </NavbarButton>
                  </Link>
                </>
              ) : (
                <Link
                  to="/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <NavbarButton variant="primary" className="w-full">
                    My Profile
                  </NavbarButton>
                </Link>
              )}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

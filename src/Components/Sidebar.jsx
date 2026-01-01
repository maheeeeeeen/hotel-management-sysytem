import React, { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/SidebarUi";
import {
  IconBrandTabler,
  IconBed,
  IconCalendarCheck,
  IconInfoCircle,
  IconMessageDots,
  IconUsers,
  IconPhone,
  IconArrowLeft,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { Link, Outlet, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import Helper from "../helper/Helper";
import AuthService from "../services/AuthService";

export function SidebarDemo() {
    const [user, setUser] = useState(null);
    const service = new AuthService();
  
  async function fetchProfile() {
    try {
      const res = await service.getProfile();
      setUser(res);
     console.log("userrr",res.name)
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  const navigate = useNavigate(); // Use useNavigate for redirection after logout
  const iconClass = "h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200";
  const links = [
    {
      label: "Dashboard",
      to: "/admin",
      icon: <IconBrandTabler className={iconClass} />,
    },
    {
      label: "Rooms",
      to: "/admin/rooms",
      icon: <IconBed className={iconClass} />,
    },
    {
      label: "Bookings",
      to: "/admin/bookings",
      icon: <IconCalendarCheck className={iconClass} />,
    },
    {
      label: "About",
      to: "/admin/about",
      icon: <IconInfoCircle className={iconClass} />,
    },
    {
      label: "Feedbacks",
      to: "/admin/feedbacks",
      icon: <IconMessageDots className={iconClass} />,
    },
    {
      label: "Users",
      to: "/admin/users",
      icon: <IconUsers className={iconClass} />,
    },
    {
      label: "Contacts",
      to: "/admin/contacts",
      icon: <IconPhone className={iconClass} />,
    },
  ];

  // Handle logout and redirection to login page
  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto flex w-full  flex-1 flex-col overflow-hidden  bg-white md:flex-row",
        // for your use case, use `h-screen` instead of `h-[60vh]`
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              <button
                onClick={handleLogout}
                className={cn(
                  "mt-8 flex items-center gap-2 rounded-lg  py-2 text-sm font-medium",
                  "text-red-600 dark:text-red-400",
                  "hover:bg-red-50 dark:hover:bg-red-900/30",
                  "transition-colors duration-200"
                )}
              >
                <IconArrowLeft className="h-5 w-5 shrink-0" />
                <span>Logout</span>
              </button>
            </div>

            {/* Styled Logout Button */}
          </div>
          <div>
            <SidebarLink
              link={{
                label: user?.name,
                to: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex-1 bg-white overflow-y-auto p-5">
        <Outlet />
      </div>
    </div>
  );
}

export const Logo = () => (
  <Link to="#" className="flex items-center space-x-2 py-1 text-sm text-black">
    <div className="h-5 w-6 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-medium whitespace-pre text-black dark:text-white"
    >
      ADMIN PANEL
    </motion.span>
  </Link>
);

export const LogoIcon = () => (
  <Link to="#" className="flex items-center space-x-2 py-1 text-sm text-black">
    <div className="h-5 w-6 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-white text-center font-bold">
      AP
    </div>
  </Link>
);

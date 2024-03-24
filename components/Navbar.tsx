"use client";

import { usePathname, useRouter } from "next/navigation";

import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

const navItems = [
  { name: "home", route: "/" },
  { name: "templates", route: "/templates" },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav
      className={clsx(
        "sticky top-0 left-0 w-full z-50",
        "flex flex-row items-center justify-between px-10 py-3",
        "bg-primary text-primary-foreground"
      )}
    >
      <div className="flex flex-row items-center gap-10">
        <Link href="/" className="text-2xl font-semibold">
          MiniTG
        </Link>

        <div className="flex flex-row items-center gap-8 uppercase">
          {navItems.map((item, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  "border-b-2 hover:border-b-primary-foreground",
                  { "border-b-primary-foreground": item.route === pathname },
                  { "border-b-transparent": item.route !== pathname }
                )}
              >
                <Link href={item.route}>{item.name}</Link>
              </div>
            );
          })}
        </div>
      </div>

      {pathname !== "/templates/create" && (
        <div>
          <Button
            variant="secondary"
            className="h-8"
            onClick={() => router.push("/templates/create")}
          >
            Create Template
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

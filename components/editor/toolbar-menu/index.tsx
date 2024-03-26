"use client";

import React, { useState } from "react";

import { Editor } from "@tiptap/react";
import TableToolbarMenu from "./TableToolbarMenu";
import TextToolbarMenu from "./TextToolbarMenu";
import clsx from "clsx";

interface ToolbarMenuProps {
  editor: Editor | null;
}

const ToolbarMenu = ({ editor }: ToolbarMenuProps) => {
  const [activeMenu, setActiveMenu] = useState<string>("Text");

  const toolbarMenus = [
    { name: "Text", onClick: () => setActiveMenu("Text") },
    { name: "Table", onClick: () => setActiveMenu("Table") },
  ];

  return (
    <>
      <div className="flex flex-row items-center justify-between px-10 pt-2 bg-slate-200">
        <div className="flex flex-row items-center">
          {toolbarMenus.map((menu, index) => {
            const { name, onClick } = menu;
            return (
              <div
                key={index}
                onClick={onClick}
                className={clsx(
                  "px-3 py-1 cursor-pointer rounded-t-sm hover:text-slate-500 hover:bg-white",
                  {
                    "text-black bg-white": activeMenu === name,
                  }
                )}
              >
                {name}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={clsx(
          "bg-card mx-10 px-2 py-2 rounded-r-md rounded-b-md shadow-md",
          { "rounded-l-md": activeMenu !== "Text" }
        )}
      >
        {activeMenu === "Text" && <TextToolbarMenu editor={editor} />}
        {activeMenu === "Table" && <TableToolbarMenu editor={editor} />}
      </div>
    </>
  );
};

export default ToolbarMenu;

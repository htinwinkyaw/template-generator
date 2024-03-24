"use client";

import React, { useState } from "react";

import { Editor } from "@tiptap/react";
import SaveButton from "./SaveButton";
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
      <div className="flex flex-row items-center justify-between gap-2 px-10 py-1">
        <div className="flex flex-row items-center gap-4">
          {toolbarMenus.map((menu, index) => {
            const { name, onClick } = menu;
            return (
              <div
                key={index}
                onClick={onClick}
                className={clsx(
                  "px-3 py-1 cursor-pointer rounded-sm hover:bg-slate-500 hover:text-white",
                  { "bg-slate-500 text-white": activeMenu === name }
                )}
              >
                {name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-card mx-10 px-2 py-2 rounded-md shadow-md">
        {activeMenu === "Text" && <TextToolbarMenu editor={editor} />}
        {activeMenu === "Table" && <TableToolbarMenu editor={editor} />}
      </div>
    </>
  );
};

export default ToolbarMenu;

import {
  TbArrowsMoveHorizontal,
  TbArrowsMoveVertical,
  TbColumnInsertLeft,
  TbColumnInsertRight,
  TbColumnRemove,
  TbRowInsertBottom,
  TbRowInsertTop,
  TbRowRemove,
  TbTableMinus,
  TbTablePlus,
} from "react-icons/tb";

import { Editor } from "@tiptap/react";
import { IconType } from "react-icons";
import { Input } from "@/components/ui/input";
import ToolbarButton from "./ToolbarButton";
import VerticalSeperator from "./VerticalSeperator";

interface TableToolbarMenuProps {
  editor: Editor | null;
}

const TableToolbarMenu = ({ editor }: TableToolbarMenuProps) => {
  const tableInsertButtons: {
    icon: IconType;
    tooltip: string;
    onClick: () => void;
  }[] = [
    {
      icon: TbTablePlus,
      tooltip: "Add Table",
      onClick: () =>
        editor
          ?.chain()
          .focus()
          .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
          .run(),
    },
    {
      icon: TbRowInsertTop,
      tooltip: "Insert Row Before",
      onClick: () => editor?.chain().focus().addRowBefore().run(),
    },
    {
      icon: TbRowInsertBottom,
      tooltip: "Insert Row After",
      onClick: () => editor?.chain().focus().addRowAfter().run(),
    },
    {
      icon: TbColumnInsertLeft,
      tooltip: "Insert Column Before",
      onClick: () => editor?.chain().focus().addColumnBefore().run(),
    },
    {
      icon: TbColumnInsertRight,
      tooltip: "Insert Column After",
      onClick: () => editor?.chain().focus().addColumnAfter().run(),
    },
  ];

  const tableDeleteButtons: {
    icon: IconType;
    tooltip: string;
    onClick: () => void;
  }[] = [
    {
      icon: TbTableMinus,
      tooltip: "Delete Table",
      onClick: () => editor?.chain().focus().deleteTable().run(),
    },
    {
      icon: TbRowRemove,
      tooltip: "Delete Row",
      onClick: () => editor?.chain().focus().deleteRow().run(),
    },
    {
      icon: TbColumnRemove,
      tooltip: "Delete Column",
      onClick: () => editor?.chain().focus().deleteColumn().run(),
    },
  ];
  return (
    <div className="flex flex-row items-center gap-[1.5px]">
      {tableInsertButtons.map((insertBtn, iIndex) => {
        const { icon, tooltip, onClick } = insertBtn;
        return (
          <ToolbarButton
            key={iIndex}
            icon={icon}
            tooltip={tooltip}
            onClick={onClick}
          />
        );
      })}
      <VerticalSeperator />
      {tableDeleteButtons.map((insertBtn, dIndex) => {
        const { icon, tooltip, onClick } = insertBtn;
        return (
          <ToolbarButton
            key={dIndex}
            icon={icon}
            tooltip={tooltip}
            onClick={onClick}
          />
        );
      })}
      {/* <VerticalSeperator />
      <div className="flex flex-row items-center gap-2">
        <TbArrowsMoveHorizontal size={24} />
        <Input type="number" className="w-16" min="1" />
      </div>
      <VerticalSeperator />
      <div className="flex flex-row items-center gap-2">
        <TbArrowsMoveVertical size={24} />
        <Input type="number" className="w-16" min="1" />
      </div> */}
    </div>
  );
};

export default TableToolbarMenu;

import {
  LuAlignCenter,
  LuAlignJustify,
  LuAlignLeft,
  LuAlignRight,
  LuBold,
  LuItalic,
  LuStrikethrough,
  LuSubscript,
  LuSuperscript,
  LuUnderline,
} from "react-icons/lu";

import { Editor } from "@tiptap/react";
import { IconType } from "react-icons";
import ToolbarButton from "./ToolbarButton";
import VerticalSeperator from "./VerticalSeperator";

interface TextToolbarMenuProps {
  editor: Editor | null;
}

const TextToolbarMenu = ({ editor }: TextToolbarMenuProps) => {
  const textFormatButtons: {
    icon: IconType;
    tooltip: string;
    isActive?: boolean;
    onClick: () => void;
  }[] = [
    {
      icon: LuBold,
      tooltip: "Bold",
      isActive: editor?.isActive("bold"),
      onClick: () => editor?.chain().focus().toggleBold().run(),
    },
    {
      icon: LuItalic,
      tooltip: "Italic",
      isActive: editor?.isActive("italic"),
      onClick: () => editor?.chain().focus().toggleItalic().run(),
    },
    {
      icon: LuUnderline,
      tooltip: "Underline",
      isActive: editor?.isActive("underline"),
      onClick: () => editor?.chain().focus().toggleUnderline().run(),
    },
    {
      icon: LuStrikethrough,
      tooltip: "Strike",
      isActive: editor?.isActive("strike"),
      onClick: () => editor?.chain().focus().toggleStrike().run(),
    },
    {
      icon: LuSuperscript,
      tooltip: "Superscript",
      isActive: editor?.isActive("superscript"),
      onClick: () => editor?.chain().focus().toggleSuperscript().run(),
    },
    {
      icon: LuSubscript,
      tooltip: "Subscript",
      isActive: editor?.isActive("subscript"),
      onClick: () => editor?.chain().focus().toggleSubscript().run(),
    },
  ];

  const textAlignButtons: {
    icon: IconType;
    tooltip: string;
    isActive?: boolean;
    onClick: () => void;
  }[] = [
    {
      icon: LuAlignLeft,
      tooltip: "left",
      isActive: editor?.isActive({ textAlign: "left" }),
      onClick: () => editor?.chain().focus().setTextAlign("left").run(),
    },
    {
      icon: LuAlignCenter,
      tooltip: "Align Center",
      isActive: editor?.isActive({ textAlign: "center" }),
      onClick: () => editor?.chain().focus().setTextAlign("center").run(),
    },
    {
      icon: LuAlignRight,
      tooltip: "Align Right",
      isActive: editor?.isActive({ textAlign: "right" }),
      onClick: () => editor?.chain().focus().setTextAlign("right").run(),
    },
    {
      icon: LuAlignJustify,
      tooltip: "Align Justify",
      isActive: editor?.isActive({ textAlign: "justify" }),
      onClick: () => editor?.chain().focus().setTextAlign("justify").run(),
    },
  ];

  return (
    <div className="flex flex-row items-center gap-[1.5px]">
      {/* IMPLEMENT: FONT STYLE & FONT SIZE */}

      {textFormatButtons.map((formatBtn, fIndex) => {
        const { icon, tooltip, isActive, onClick } = formatBtn;
        return (
          <ToolbarButton
            key={fIndex}
            icon={icon}
            tooltip={tooltip}
            isActive={isActive}
            onClick={onClick}
          />
        );
      })}
      <VerticalSeperator />
      {textAlignButtons.map((alignBtn, aIndex) => {
        const { icon, tooltip, isActive, onClick } = alignBtn;
        return (
          <ToolbarButton
            key={aIndex}
            icon={icon}
            tooltip={tooltip}
            isActive={isActive}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

export default TextToolbarMenu;

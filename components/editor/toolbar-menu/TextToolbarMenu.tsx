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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Editor } from "@tiptap/react";
import { IconType } from "react-icons";
import ToolbarButton from "./ToolbarButton";
import VerticalSeperator from "./VerticalSeperator";

interface TextToolbarMenuProps {
  editor: Editor | null;
}

const TextToolbarMenu = ({ editor }: TextToolbarMenuProps) => {
  const fontFamilies = [
    { value: "monospace", label: "Monospace" },
    { value: "cursive", label: "Cursive" },
    { value: "serif", label: "Serif" },
    { value: "Comic Sans MS, Comic Sans", label: "Comic Sans" },
  ];

  const fontSizes = [
    "8px",
    "9px",
    "10px",
    "12px",
    "16px",
    "20px",
    "24px",
    "28px",
    "32px",
    "40px",
    "48px",
    "56px",
    "64px",
    "72px",
  ];
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

  const handleFontFamilyChange = (value: string) => {
    if (value === "default") {
      editor?.commands.unsetFontFamily();
    } else {
      editor?.chain().focus().setFontFamily(value).run();
    }
  };

  const handleFontSizeChange = (value: string) => {
    editor?.chain().focus().setFontSize(value).run();
  };

  return (
    <div className="flex flex-row items-center gap-[1.5px]">
      {/* FONT STYLE & FONT SIZE */}
      <div className="flex flex-row items-center gap-2">
        <div className="w-40">
          <Select defaultValue="default" onValueChange={handleFontFamilyChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select Font Style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              {fontFamilies.map((fontFamily, fontIndex) => (
                <SelectItem key={fontIndex} value={fontFamily.value}>
                  {fontFamily.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-20">
          <Select defaultValue="16px" onValueChange={handleFontSizeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Font Size" />
            </SelectTrigger>
            <SelectContent>
              {fontSizes.map((size, sizeIndex) => {
                return (
                  <SelectItem key={sizeIndex} value={`${size}`}>
                    {size}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
      <VerticalSeperator />
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

"use client";

import { Template } from "@/types/template.type";
import { truncateText } from "@/utils/truncateText";
import { useRouter } from "next/navigation";

interface TemplateListItemProps {
  template: Template;
}

const TemplateListItem = ({ template }: TemplateListItemProps) => {
  const router = useRouter();
  const pageHeight = Math.floor(+template.pageHeight.split("c")[0] / 7) + "cm";
  const pageWidth = Math.floor(+template.pageWidth.split("c")[0] / 7) + "cm";
  return (
    <div
      className="flex flex-col items-center justify-end gap-4 cursor-pointer"
      onClick={() => router.push(`/templates/${template.id}`)}
    >
      <div
        style={{ width: pageWidth, height: pageHeight }}
        className="flex flex-col items-center justify-center bg-white text-slate-500 shadow-md hover:bg-slate-100"
      >
        <span className="text-sm">{template.pageWidth}</span>
        <span className="text-sm">x</span>
        <span className="text-sm">{template.pageHeight}</span>
      </div>
      <div className="text-sm">{truncateText(template.name, 14)}</div>
    </div>
  );
};

export default TemplateListItem;

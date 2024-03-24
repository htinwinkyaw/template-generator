"use client";

import { Template } from "@/types/template.type";
import { truncateText } from "@/utils/truncateText";
import { useRouter } from "next/navigation";

interface TemplateListItemProps {
  template: Template;
}

const TemplateListItem = ({ template }: TemplateListItemProps) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 cursor-pointer"
      onClick={() => router.push(`/templates/${template.id}`)}
    >
      <div className="flex flex-col items-center justify-center w-[3cm] h-[4cm] bg-white text-slate-500 shadow-md hover:bg-slate-100">
        <span>{template.pageWidth}</span>
        <span>x</span>
        <span>{template.pageHeight}</span>
      </div>
      <div className="text-sm">{truncateText(template.name, 14)}</div>
    </div>
  );
};

export default TemplateListItem;

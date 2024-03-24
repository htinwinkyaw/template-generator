"use client";

import ApplyTemplateForm from "./ApplyTemplateForm";
import NullData from "@/components/NullData";
import { Template } from "@/types/template.type";
import { findPlaceholders } from "@/utils/findPlaceholders";

interface ApplyTemplateClientProps {
  templateId: string;
}

const ApplyTemplateClient = ({ templateId }: ApplyTemplateClientProps) => {
  let template: Template | undefined = undefined;
  try {
    const dataJSON = localStorage.getItem("templates");
    if (dataJSON) {
      const templates: Template[] = JSON.parse(dataJSON);
      template = templates.find((entry) => entry.id === templateId);
    }
  } catch (error) {
    template = undefined;
  }

  if (template === undefined)
    return <NullData title="404: Template Not Found!" />;

  const placeholders = findPlaceholders(template?.format);

  if (placeholders.length === 0)
    return <NullData title="No placeholders to generate!" />;

  return (
    <div className="flex flex-row items-center justify-center">
      <ApplyTemplateForm templateId={template.id} placeholders={placeholders} />
    </div>
  );
};

export default ApplyTemplateClient;

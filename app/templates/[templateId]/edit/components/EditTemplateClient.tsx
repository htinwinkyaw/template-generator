"use client";

import Editor from "@/components/editor";
import NullData from "@/components/NullData";
import { Template } from "@/types/template.type";

interface EditTemplateClientProps {
  templateId: string;
}

const EditTemplateClient = ({ templateId }: EditTemplateClientProps) => {
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
  return (
    <div className="bg-slate-200">
      <Editor
        pageHeight={template.pageHeight}
        pageWidth={template.pageWidth}
        pageMargin={template.pageMargin}
        template={template}
        isEditable
      />
    </div>
  );
};

export default EditTemplateClient;

"use client";

import Editor from "@/components/editor";
import NullData from "@/components/NullData";
import { Template } from "@/types/template.type";
import { replacePlaceholders } from "@/utils/replacePlaceholders";
import { useToast } from "@/components/ui/use-toast";

interface PreviewTemplateClientProps {
  templateId: string;
}

const PreviewTemplateClient = ({ templateId }: PreviewTemplateClientProps) => {
  const { toast } = useToast();

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

  let generatedTemplate;
  try {
    const placeholdersJSON = localStorage.getItem(template.id);
    if (placeholdersJSON) {
      const placeholders = JSON.parse(placeholdersJSON);
      const replacedTemplateFormat = replacePlaceholders(
        template.format,
        placeholders
      );
      generatedTemplate = { ...template, format: replacedTemplateFormat };
    }
  } catch (error) {
    toast({
      title: "Template Generation Failed!",
      description:
        "Failed to fetch the template placeholders from the temp storage.",
    });
  }
  return (
    <div className="bg-slate-200">
      <Editor
        pageHeight={template.pageHeight}
        pageWidth={template.pageWidth}
        pageMargin={template.pageMargin}
        template={generatedTemplate}
        isEditable={false}
      />
    </div>
  );
};

export default PreviewTemplateClient;

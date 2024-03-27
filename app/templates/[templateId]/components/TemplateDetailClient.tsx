"use client";

import { useEffect, useState } from "react";

import Editor from "@/components/editor";
import NullData from "@/components/NullData";
import { Template } from "@/types/template.type";
import TemplateDetailFloatingButtons from "./TemplateDetailFloatingButton";
import { templateActions } from "@/actions/templateActions";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface TemplateDetailClientProps {
  templateId: string;
}

const TemplateDetailClient = ({ templateId }: TemplateDetailClientProps) => {
  const router = useRouter();
  const [template, setTemplate] = useState<Template | null>(null);

  useEffect(() => {
    try {
      const foundTemplate = templateActions.getSingleTempalteById(templateId);
      if (foundTemplate) setTemplate(foundTemplate);
      else setTemplate(null);
    } catch (error) {
      setTemplate(null);
    }
  }, [templateId]);

  const handleDeleteTemplate = () => {
    try {
      templateActions.deleteTemplateById(templateId);

      toast({
        title: "Template Deletion Successful!",
        description: "Template is deleted from the database successfully.",
      });
      router.push("/templates");
      router.refresh();
    } catch (error) {
      toast({
        title: "Template Deletion Failed!",
        description:
          "Template is failed deleted from the database. Please try again later.",
      });
    }
  };

  if (!template) return <NullData title="404: Template Not Found!" />;
  return (
    <div className="bg-slate-200">
      <Editor
        pageHeight={template.pageHeight}
        pageWidth={template.pageWidth}
        pageMargin={template.pageMargin}
        template={template}
        isEditable={false}
      />

      <div className="fixed bottom-8 right-16 flex flex-col gap-2">
        <TemplateDetailFloatingButtons
          template={template}
          onDelete={handleDeleteTemplate}
        />
      </div>
    </div>
  );
};

export default TemplateDetailClient;

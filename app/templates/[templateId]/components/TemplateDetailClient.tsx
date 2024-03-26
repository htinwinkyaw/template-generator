"use client";

import { useEffect, useState } from "react";

import Editor from "@/components/editor";
import NullData from "@/components/NullData";
import { Template } from "@/types/template.type";
import TemplateDetailFloatingButtons from "./TemplateDetailFloatingButton";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface TemplateDetailClientProps {
  templateId: string;
}

const TemplateDetailClient = ({ templateId }: TemplateDetailClientProps) => {
  const router = useRouter();
  const [template, setTemplate] = useState<Template | undefined>(undefined);

  useEffect(() => {
    try {
      const dataJSON = localStorage.getItem("templates");
      if (dataJSON) {
        const templates: Template[] = JSON.parse(dataJSON);
        const foundTemplate = templates.find(
          (entry) => entry.id === templateId
        );
        setTemplate(foundTemplate);
      }
    } catch (error) {
      setTemplate(undefined);
    }
  }, [templateId]);

  const handleDeleteTemplate = () => {
    try {
      const dataJSON = localStorage.getItem("templates");
      if (dataJSON) {
        const templates: Template[] = JSON.parse(dataJSON);
        const filteredTemplates = templates.filter(
          (temp) => temp.id !== templateId
        );
        localStorage.setItem("templates", JSON.stringify(filteredTemplates));
        toast({
          title: "Template Deletion Successful!",
          description: "Template is deleted from the database successfully.",
        });
        router.push("/templates");
        router.refresh();
      }
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

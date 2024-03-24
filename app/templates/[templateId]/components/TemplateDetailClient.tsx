"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import Editor from "@/components/editor";
import NullData from "@/components/NullData";
import { Template } from "@/types/template.type";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface TemplateDetailClientProps {
  templateId: string;
}

const TemplateDetailClient = ({ templateId }: TemplateDetailClientProps) => {
  const router = useRouter();

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

  return (
    <div className="bg-slate-200">
      <Editor
        pageHeight={template.pageHeight}
        pageWidth={template.pageWidth}
        pageMargin={template.pageMargin}
        template={template}
        isEditable={false}
      />

      <div className="flex flex-row items-center justify-center gap-4 pb-8">
        <Button onClick={() => router.push(`/templates/${template.id}/apply`)}>
          Apply
        </Button>
        <Button onClick={() => router.push(`/templates/${template.id}/edit`)}>
          Edit
        </Button>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant="destructive">Delete</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Do you really want to delete?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                template from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteTemplate}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default TemplateDetailClient;

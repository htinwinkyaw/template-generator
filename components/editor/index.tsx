"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import { Template, TemplatePrivacyEnum } from "@/types/template.type";

import CreateTemplateFloatingButtons from "./CreateTemplateFloatingButtons";
import EditTemplateFloatingButtons from "./EditTemplateFloatingButtons";
import { FontFamily } from "@tiptap/extension-font-family";
import { FontSize } from "tiptap-extension-font-size";
import { StarterKit } from "@tiptap/starter-kit";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { Table } from "@tiptap/extension-table";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableRow } from "@tiptap/extension-table-row";
import { TextAlign } from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import ToolbarMenu from "./toolbar-menu";
import { Underline } from "@tiptap/extension-underline";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { v4 as uuidv4 } from "uuid";

interface EditorProps {
  pageHeight: string;
  pageWidth: string;
  pageMargin: string;
  template?: Template;
  isEditable: boolean;
  setIsPageSelected?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Editor = ({
  pageHeight,
  pageWidth,
  pageMargin,
  template,
  isEditable,
  setIsPageSelected,
}: EditorProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const [templateName, setTemplateName] = useState<string | null>(null);
  const [templatePrivacy, setTemplatePrivacy] = useState<TemplatePrivacyEnum>(
    TemplatePrivacyEnum.private
  );

  const width = +pageWidth.split("c")[0];
  const margin = +pageMargin.split("c")[0];

  const handleCreateTemplate = () => {
    if (templateName === null) {
      return toast({
        title: "Template Creation Failed!",
        description:
          "Unable to save the template. Please check your template name and privacy.",
        variant: "destructive",
      });
    }

    try {
      let templates: Template[] = [];
      const templatesJSON = localStorage.getItem("templates");

      if (templatesJSON) {
        templates = JSON.parse(templatesJSON);
      }

      templates.push({
        id: uuidv4(),
        name: templateName,
        privacy: templatePrivacy,
        format: editor?.getHTML() || "<p></p>",
        pageHeight: pageHeight,
        pageWidth: pageWidth,
        pageMargin: pageMargin,
      });

      localStorage.setItem("templates", JSON.stringify(templates));

      toast({
        title: "Template Created Successfully.",
        description:
          "Your template is saved in the localStorage. Apply it in templates.",
      });
      router.push("/templates");
      router.refresh();
    } catch (error) {
      toast({
        title: "Template Creation Failed!",
        description:
          "Something went while creating the template. Please contact to the developer.",
        variant: "destructive",
      });
    }
  };

  const handleUpdateTemplate = () => {
    if (template) {
      try {
        let templates: Template[] = [];
        const templatesJSON = localStorage.getItem("templates");
        if (templatesJSON) {
          templates = JSON.parse(templatesJSON);
        }
        const templateIndex = templates.findIndex(
          (entry) => entry.id === template.id
        );
        templates[templateIndex] = {
          ...template,
          format: editor?.getHTML() || "<p></p>",
        };

        localStorage.setItem("templates", JSON.stringify(templates));

        toast({
          title: "Template Updated Successfully.",
          description:
            "Your template is updated in the database. Apply it in templates.",
        });
        router.push("/templates");
        router.refresh();
      } catch (error) {
        toast({
          title: "Template Update Failed!",
          description:
            "Something went while updating the template. Please contact to the developer.",
          variant: "destructive",
        });
      }
    }
  };

  const editor = useEditor({
    content: template?.format || "",
    editable: isEditable,
    extensions: [
      StarterKit,
      Underline,
      Superscript,
      Subscript,
      TextAlign.configure({
        types: ["heading", "paragraph", "table"],
      }),
      TextStyle,
      FontFamily.configure({
        types: ["textStyle"],
      }),
      FontSize,
      Table.configure({
        HTMLAttributes: {
          class: "border border-black w-full",
        },
        resizable: true,
        allowTableNodeSelection: true,
        cellMinWidth: ((width - margin - margin) * 37.7952755906) / 3,
      }),
      TableRow.configure({ HTMLAttributes: { class: "border border-black" } }),
      TableCell.configure({ HTMLAttributes: { class: "border border-black" } }),
      TableHeader.configure({
        HTMLAttributes: { class: "bg-slate-300 border border-black" },
      }),
    ],
    editorProps: {
      attributes: {
        style: `height: ${pageHeight}; width: ${pageWidth}; padding: ${pageMargin}; background: white;`,
        class: "focus:outline-none",
      },
    },
  });

  return (
    <>
      {isEditable && (
        <div className="fixed left-0 z-40 w-full bg-slate-200">
          <ToolbarMenu editor={editor} />
        </div>
      )}

      <div
        className={clsx(
          "flex flex-col items-center justify-center gap-4 px-auto py-8",
          { "pt-32": isEditable }
        )}
      >
        <EditorContent editor={editor} />
      </div>

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-8 right-16 flex flex-col gap-2">
        {isEditable && !template && (
          <CreateTemplateFloatingButtons
            onSave={handleCreateTemplate}
            setIsPageSelected={setIsPageSelected!}
            setTemplateName={setTemplateName}
            setTemplatePrivacy={setTemplatePrivacy}
          />
        )}

        {isEditable && template && (
          <EditTemplateFloatingButtons onSave={handleUpdateTemplate} />
        )}
      </div>
    </>
  );
};

export default Editor;

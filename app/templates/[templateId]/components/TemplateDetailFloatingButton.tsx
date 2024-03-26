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
import { LuClipboardEdit, LuFormInput, LuTrash2 } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { Template } from "@/types/template.type";
import { useRouter } from "next/navigation";

interface TemplateDetailFloatingButtonsProps {
  template: Template;
  onDelete: () => void;
}

const TemplateDetailFloatingButtons = ({
  template,
  onDelete,
}: TemplateDetailFloatingButtonsProps) => {
  const router = useRouter();
  const customClasses =
    "flex flex-row items-center gap-2 px-4 py-1 cursor-pointer hover:bg-slate-50 hover:rounded-lg";

  return (
    <>
      <div
        className={customClasses}
        onClick={() => router.push(`/templates/${template.id}/apply`)}
      >
        <Button>
          <LuFormInput size={24} />
        </Button>
        <span>Apply</span>
      </div>
      <div
        className={customClasses}
        onClick={() => router.push(`/templates/${template.id}/edit`)}
      >
        <Button>
          <LuClipboardEdit size={24} />
        </Button>
        <span>Edit</span>
      </div>

      <AlertDialog>
        <AlertDialogTrigger>
          <div className={customClasses}>
            <Button variant="destructive">
              <LuTrash2 size={24} />
            </Button>
            <span>Delete</span>
          </div>
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
            <AlertDialogAction onClick={onDelete}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default TemplateDetailFloatingButtons;

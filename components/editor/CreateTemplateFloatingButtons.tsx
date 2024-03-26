"use client";

import { LuUndo2, LuX } from "react-icons/lu";

import { Button } from "../ui/button";
import SaveDialogButton from "./SaveDialogButton";
import { TemplatePrivacyEnum } from "@/types/template.type";
import { useRouter } from "next/navigation";

interface CreateTemplateFloatingButtonsProps {
  setTemplateName: React.Dispatch<React.SetStateAction<string | null>>;
  setTemplatePrivacy: React.Dispatch<React.SetStateAction<TemplatePrivacyEnum>>;
  setIsPageSelected: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: () => void;
}

const CreateTemplateFloatingButtons = ({
  setTemplateName,
  setTemplatePrivacy,
  setIsPageSelected,
  onSave,
}: CreateTemplateFloatingButtonsProps) => {
  const router = useRouter();
  const customClasses =
    "flex flex-row items-center gap-2 px-4 py-1 cursor-pointer hover:bg-slate-50 hover:rounded-lg";

  return (
    <>
      <div>
        <SaveDialogButton
          onSave={onSave}
          setTemplateName={setTemplateName}
          setTemplatePrivacy={setTemplatePrivacy}
        />
      </div>
      {/* <div onClick={() => setIsPageSelected(false)}>
        <div className={customClasses}>
          <Button>
            <LuUndo2 size={24} />
          </Button>
          <span>Change Paper</span>
        </div>
      </div> */}
      <div onClick={() => router.push("/templates")}>
        <div className={customClasses}>
          <Button>
            <LuX size={24} />
          </Button>
          <span>Cancel</span>
        </div>
      </div>
    </>
  );
};

export default CreateTemplateFloatingButtons;

"use client";

import { LuSave, LuX } from "react-icons/lu";

import { Button } from "../ui/button";
import React from "react";
import { useRouter } from "next/navigation";

interface EditTemplateFloatingButtonsProps {
  onSave: () => void;
}

const EditTemplateFloatingButtons = ({
  onSave,
}: EditTemplateFloatingButtonsProps) => {
  const router = useRouter();
  const customClasses =
    "flex flex-row items-center gap-2 px-4 py-1 cursor-pointer hover:bg-slate-50 hover:rounded-lg";

  return (
    <div>
      <div className={customClasses} onClick={onSave}>
        <Button>
          <LuSave size={24} />
        </Button>
        <span>Save</span>
      </div>

      <div className={customClasses} onClick={() => router.back()}>
        <Button>
          <LuX size={24} />
        </Button>
        <span>Cancel</span>
      </div>
    </div>
  );
};

export default EditTemplateFloatingButtons;

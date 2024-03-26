import {
  LuExternalLink,
  LuFileInput,
  LuFileText,
  LuSave,
  LuX,
} from "react-icons/lu";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

const PreviewTemplateFloatingButtons = () => {
  const router = useRouter();
  const customClasses =
    "flex flex-row items-center gap-2 px-4 py-1 cursor-pointer hover:bg-slate-50 hover:rounded-lg";

  return (
    <div>
      <div className={`${customClasses} cursor-not-allowed`} onClick={() => {}}>
        <Button>
          <LuExternalLink size={24} />
        </Button>
        <span>Export</span>
      </div>

      <div className={customClasses} onClick={() => router.back()}>
        <Button>
          <LuFileInput size={24} />
        </Button>
        <span>Change Data</span>
      </div>
      <div className={customClasses} onClick={() => router.push("/templates")}>
        <Button>
          <LuFileText size={24} />
        </Button>
        <span>Change Template</span>
      </div>
    </div>
  );
};

export default PreviewTemplateFloatingButtons;

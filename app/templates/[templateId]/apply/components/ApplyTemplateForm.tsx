"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toPascalCase } from "@/utils/toPascalCase";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

interface ApplyTemplateFormProps {
  templateId: string;
  placeholders: string[];
}

const ApplyTemplateForm = ({
  templateId,
  placeholders,
}: ApplyTemplateFormProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const [inputs, setInputs] = useState<{ key: string; value: string }[]>([]);

  useEffect(() => {
    const initialInputs = placeholders.map((placeholder) => ({
      key: placeholder,
      value: "",
    }));
    setInputs(initialInputs);
  }, [placeholders]);

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index].value = value;
    setInputs(newInputs);
  };

  const handleTemplateGenerate = () => {
    try {
      if (typeof window !== undefined) {
        localStorage.setItem(templateId, JSON.stringify(inputs));
      }
      router.push(`/templates/${templateId}/preview`);
    } catch (error) {
      toast({
        title: "Template Generation Failed!",
        description:
          "Template generation failed while storing the placeholders in the temp storage.",
      });
    }
  };

  return (
    <div className="grid items-center gap-1.5 mt-10 p-10 w-full max-w-md border border-slate-200 rounded-lg shadow-lg">
      {placeholders.map((placeholder, index) => {
        return (
          <div key={index}>
            <Label htmlFor={placeholder}>{toPascalCase(placeholder)}</Label>
            <Input
              type="text"
              id={placeholder}
              placeholder={`Enter ${toPascalCase(placeholder)}`}
              onChange={(event) => handleInputChange(index, event.target.value)}
              autoComplete="off"
            />
          </div>
        );
      })}
      <div className="flex flex-row items-center justify-end gap-3">
        <Button variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button onClick={handleTemplateGenerate}>Generate</Button>
      </div>
    </div>
  );
};

export default ApplyTemplateForm;

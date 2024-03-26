import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuInfo, LuSave } from "react-icons/lu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TemplatePrivacyEnum } from "@/types/template.type";

interface SaveDialogButtonProps {
  setTemplateName: React.Dispatch<React.SetStateAction<string | null>>;
  setTemplatePrivacy: React.Dispatch<React.SetStateAction<TemplatePrivacyEnum>>;
  onSave: () => void;
}
const SaveDialogButton = ({
  setTemplateName,
  setTemplatePrivacy,
  onSave,
}: SaveDialogButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-row items-center gap-2 px-4 py-1 cursor-pointer hover:bg-slate-50 hover:rounded-lg">
          <Button>
            <LuSave size={24} />
          </Button>
          <span>Save</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-row items-center gap-4">
              <LuInfo />
              <span>Template Information</span>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Input
              id="name"
              onChange={(event) => setTemplateName(event.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="privacy" className="text-left">
              Privacy
            </Label>
            <div className="col-span-3">
              <Select
                defaultValue={TemplatePrivacyEnum.private.toString()}
                onValueChange={(value) =>
                  setTemplatePrivacy(
                    value === "private"
                      ? TemplatePrivacyEnum.private
                      : TemplatePrivacyEnum.public
                  )
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Privacy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={TemplatePrivacyEnum.private.toString()}>
                    Private
                  </SelectItem>
                  <SelectItem value={TemplatePrivacyEnum.public.toString()}>
                    Public
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-row items-center justify-end gap-4">
            <Button onClick={onSave}>Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SaveDialogButton;

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";
import clsx from "clsx";

interface ToolbarButtonProps {
  icon: IconType;
  tooltip: string;
  isActive?: boolean;
  onClick: () => void;
}

const ToolbarButton = ({
  icon: Icon,
  tooltip,
  isActive,
  onClick,
}: ToolbarButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            onClick={onClick}
            className={clsx("px-2 py-1", { "bg-slate-200": isActive })}
          >
            <Icon size={20} />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ToolbarButton;

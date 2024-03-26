import { Button } from "@/components/ui/button";
import { Paper } from "@/types/template.type";
import clsx from "clsx";
import { paperSizes } from "@/constants/paper-sizes";
import { useState } from "react";

interface ChoosePageSizeProps {
  setPageHeight: React.Dispatch<React.SetStateAction<string>>;
  setPageWidth: React.Dispatch<React.SetStateAction<string>>;
  setPageMargin: React.Dispatch<React.SetStateAction<string>>;
  setIsPageSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChoosePageSize = ({
  setPageHeight,
  setPageWidth,
  setPageMargin,
  setIsPageSelected,
}: ChoosePageSizeProps) => {
  const [activePaper, setActivePaper] = useState<string>("p3");

  const handlePageSelect = (paper: Paper) => {
    setActivePaper(paper.id);
    setPageHeight(paper.height);
    setPageWidth(paper.width);
    setPageMargin(paper.margin);
  };

  return (
    <div className="bg-white">
      <h1 className="text-center text-2xl font-semibold mx-auto py-8">
        Choose The Paper Size
      </h1>
      <div className="grid grid-cols-5 gap-2 border border-slate-300 mx-10 mb-4">
        {paperSizes.map((paper, index) => {
          const pageHeight = Math.floor(+paper.height.split("c")[0] / 7) + "cm";
          const pageWidth = Math.floor(+paper.width.split("c")[0] / 7) + "cm";

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-end gap-2 px-10 py-8"
            >
              <div
                className={clsx(
                  "flex flex-col items-center justify-center gap-1",
                  "bg-white shadow-lg cursor-pointer hover:bg-blue-300",
                  { "bg-blue-200": paper.id === activePaper }
                )}
                style={{ height: pageHeight, width: pageWidth }}
                onClick={handlePageSelect.bind(null, paper)}
              >
                <span className=" text-sm">{pageHeight}</span>
                <span className=" text-sm">x</span>
                <span className=" text-sm">{pageWidth}</span>
              </div>
              <div className="flex flex-col items-center">
                <span>{paper.name}</span>
                <span>({paper.mode === 0 ? "Potrait" : "Landscape"})</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row items-center justify-end mx-10">
        <Button onClick={() => setIsPageSelected(true)}>Next</Button>
      </div>
    </div>
  );
};

export default ChoosePageSize;

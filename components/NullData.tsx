"use client";

import { Button } from "./ui/button";
import { LuUndo2 } from "react-icons/lu";
import React from "react";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
}

const NullData: React.FC<Props> = ({ title }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full h-[50vh] text-slate-400 text-xl md:text-2xl">
      <p className="font-medium">{title}</p>
      <Button
        className="flex flex-row items-center justify-center gap-4"
        onClick={() => router.back()}
      >
        <LuUndo2 size={24} />
        Go Back
      </Button>
    </div>
  );
};

export default NullData;

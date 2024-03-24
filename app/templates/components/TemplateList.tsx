import React from "react";
import { Template } from "@/types/template.type";
import TemplateListItem from "./TemplateListItem";

interface TemplateListProps {
  templates: Template[];
}

const TemplateList = ({ templates }: TemplateListProps) => {
  return (
    <div className="grid grid-cols-5 items-center justify-around my-10">
      {templates.map((template, index) => {
        return <TemplateListItem key={index} template={template} />;
      })}
    </div>
  );
};

export default TemplateList;

"use client";

import NullData from "@/components/NullData";
import { Template } from "@/types/template.type";
import TemplateList from "./TemplateList";
import { templateActions } from "@/actions/templateActions";

const TemplatesClient = () => {
  let templates: Template[] | null = [];
  try {
    templates = templateActions.getAllTemplates();
  } catch (error) {
    templates = null;
  }

  if (templates === null) return <NullData title="Something Went Wrong!" />;
  if (templates.length === 0) return <NullData title="No Templates!" />;
  return <TemplateList templates={templates} />;
};

export default TemplatesClient;

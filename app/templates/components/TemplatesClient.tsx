"use client";

import NullData from "@/components/NullData";
import { Template } from "@/types/template.type";
import TemplateList from "./TemplateList";
import { templateActions } from "@/actions/templateActions";
import { useEffect } from "react";

const TemplatesClient = () => {
  useEffect(() => {
    const template = templateActions.getSingleTempalteById(
      "444f60df-8091-4ae1-8996-04491355b973"
    );

    if (!template) {
      localStorage.setItem(
        "templates",
        JSON.stringify([
          {
            id: "444f60df-8091-4ae1-8996-04491355b973",
            name: "Sample Data",
            format:
              '<p style="text-align: center"><strong><span style="font-family: cursive; font-size: 40px">ADDRESS CARD</span></strong></p><p>name: {{name}}</p><p>address: {{address}}</p><p>phone: {{phone}}</p>',
            pageHeight: "29.7cm",
            pageWidth: "21cm",
            pageMargin: "2cm",
            privacy: 0,
          },
        ])
      );
    }
  }, []);

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

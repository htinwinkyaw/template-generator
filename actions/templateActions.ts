"use client";

import { Template, TemplatePrivacyEnum } from "@/types/template.type";

import { v4 as uuidv4 } from "uuid";

const createTemplate = (
  name: string,
  privacy: TemplatePrivacyEnum,
  format: string,
  pageHeight: string,
  pageWidth: string,
  pageMargin: string
): void => {
  try {
    const template = {
      id: uuidv4(),
      name,
      privacy,
      format,
      pageHeight,
      pageWidth,
      pageMargin,
    };

    const templates = getAllTemplates() || [];

    templates.push(template);

    localStorage.setItem("templates", JSON.stringify(templates));
  } catch (error) {
    console.log("Failed to create new template.");
    throw new Error();
  }
};

const getAllTemplates = (): Template[] | null => {
  let templates: Template[] = [];
  try {
    const templatesJSON = localStorage.getItem("templates");
    if (!templatesJSON) {
      return null;
    }
    templates = JSON.parse(templatesJSON);
    return templates;
  } catch (error) {
    console.log("Failed to fetch all templates.");
    throw new Error();
  }
};

const getSingleTempalteById = (templateId: string): Template | null => {
  try {
    const templates = getAllTemplates() || [];
    const template = templates.find((entry) => entry.id === templateId);

    if (!template) return null;
    return template;
  } catch (error) {
    console.log("Failed to fetch single template.");
    throw new Error();
  }
};

const updateTemplateById = (templateId: string, format: string) => {
  try {
    const templates = getAllTemplates() || [];
    const template = getSingleTempalteById(templateId);
    if (!template) return null;
    const templateIndex = templates.findIndex(
      (entry) => entry.id === templateId
    );
    templates[templateIndex] = { ...template, format };
    localStorage.setItem("templates", JSON.stringify(templates));
  } catch (error) {
    console.log("Failed to update template.");
    throw new Error();
  }
};

const deleteTemplateById = (templateId: string): void => {
  try {
    const templates = getAllTemplates() || [];
    const filteredTemplates = templates.filter(
      (temp) => temp.id !== templateId
    );

    localStorage.setItem("templates", JSON.stringify(filteredTemplates));
  } catch (error) {
    console.log("Failed to delete template.");
    throw new Error();
  }
};

export const templateActions = {
  createTemplate,
  getAllTemplates,
  getSingleTempalteById,
  updateTemplateById,
  deleteTemplateById,
};

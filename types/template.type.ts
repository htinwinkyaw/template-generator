export type Template = {
  id: string;
  name: string;
  privacy: TemplatePrivacyEnum;
  format: string;
  pageHeight: string;
  pageWidth: string;
  pageMargin: string;
};

export enum TemplatePrivacyEnum {
  private,
  public,
}

export type Paper = {
  id: string;
  name: string;
  height: string;
  width: string;
  margin: string;
  mode: PaperModeEnum;
};

export enum PaperModeEnum {
  potrait,
  landscape,
}

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

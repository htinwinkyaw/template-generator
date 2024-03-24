import PreviewTemplateClient from "./components/PreviewTemplateClient";

interface PreviewTemplateProps {
  params: { templateId: string };
}
const PreviewTemplate = async ({ params }: PreviewTemplateProps) => {
  const templateId = params.templateId;
  return <PreviewTemplateClient templateId={templateId} />;
};

export default PreviewTemplate;

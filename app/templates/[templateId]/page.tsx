import TemplateDetailClient from "./components/TemplateDetailClient";

interface TemplateDetailPageProps {
  params: { templateId: string };
}

const TemplateDetailPage = async ({ params }: TemplateDetailPageProps) => {
  const templateId = params.templateId;

  return <TemplateDetailClient templateId={templateId} />;
};

export default TemplateDetailPage;

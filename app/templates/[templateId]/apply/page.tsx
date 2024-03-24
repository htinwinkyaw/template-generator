import ApplyTemplateClient from "./components/ApplyTemplateClient";

interface ApplyTemplatePageProps {
  params: { templateId: string };
}

const ApplyTemplatePage = async ({ params }: ApplyTemplatePageProps) => {
  const templateId = params.templateId;

  return <ApplyTemplateClient templateId={templateId} />;
};

export default ApplyTemplatePage;

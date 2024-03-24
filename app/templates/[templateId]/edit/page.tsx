import EditTemplateClient from "./components/EditTemplateClient";

interface EditTemplatePageProps {
  params: { templateId: string };
}
const EditTemplatePage = async ({ params }: EditTemplatePageProps) => {
  const templateId = params.templateId;

  return <EditTemplateClient templateId={templateId} />;
};

export default EditTemplatePage;

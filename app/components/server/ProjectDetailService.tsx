import { Project } from "@/domain/models/Project";
import { ProjectService } from "@/application/services/ProjectService";

export default async function ProjectDetailService({
  tenant,
  id,
  children,
}: {
  tenant: string;
  id: string;
  children: (props: { project: Project }) => React.ReactNode;
}) {
  const project = await ProjectService.getProjectDetail(tenant, id);
  return <>{children({ project })}</>;
}

import { Project } from "@/domain/models/Project";
import { ProjectService } from "@/application/services/ProjectService";
import { ProjectFilter } from "@/domain/utils/filterProjects";

export default async function ProjectsService({
  tenant,
  filter,
  children,
}: {
  tenant: string;
  filter?: ProjectFilter;
  children: (props: { projects: Project[] }) => React.ReactNode;
}) {
  const projects = await ProjectService.getProjectsForTenant(tenant, filter);
  return <>{children({ projects })}</>;
}

import { Project } from "@/domain/models/Project";
import { ProjectService } from "@/application/services/ProjectService";

export default async function DashboardService({
  tenant,
  children,
}: {
  tenant: string;
  children: (props: { projects: Project[] }) => React.ReactNode;
}) {
  const projects = await ProjectService.getProjectsForTenant(tenant);
  return <>{children({ projects })}</>;
}

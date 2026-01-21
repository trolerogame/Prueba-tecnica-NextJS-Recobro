import { Project, ProjectStatus } from "@/domain/models/Project";

export type ProjectFilter = "all" | ProjectStatus;

export function filterProjectsByStatus(projects: Project[], filter: ProjectFilter = "all"): Project[] {
  if (filter === "all") return projects;
  return projects.filter((p) => p.status === filter);
}

export default filterProjectsByStatus;

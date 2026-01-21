export type ProjectStatus = 'active' | 'archived';

export interface ProjectDTO {
  id: string;
  name: string;
  status: ProjectStatus;
  tenantId: string;
}

export default ProjectDTO;

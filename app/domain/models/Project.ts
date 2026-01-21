export type ProjectStatus = 'active' | 'archived';

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  tenantId: string; // Crucial para el multi-tenant
}
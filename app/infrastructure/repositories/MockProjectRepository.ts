import { Project } from "@/domain/models/Project";
import { filterProjectsByStatus, ProjectFilter } from "@/domain/utils/filterProjects";

const MOCK_PROJECTS: Project[] = [
  { id: '1', name: 'Web Acme', status: 'active', tenantId: 'acme' },
  { id: '2', name: 'App Umbrella', status: 'active', tenantId: 'umbrella' },
  { id: '3', name: 'Web Acme 2', status: 'archived', tenantId: 'acme' },
  { id: '4', name: 'Portal Globex', status: 'active', tenantId: 'globex' },
  { id: '5', name: 'Mobile Initech', status: 'archived', tenantId: 'initech' },
  { id: '6', name: 'API Stark', status: 'active', tenantId: 'stark' },
  { id: '7', name: 'Landing Wayne', status: 'active', tenantId: 'wayne' },
  { id: '8', name: 'Legacy Umbrella', status: 'archived', tenantId: 'umbrella' },
  { id: '9', name: 'Admin Acme', status: 'active', tenantId: 'acme' },
  { id: '10', name: 'CRM Globex', status: 'archived', tenantId: 'globex' },
  { id: '11', name: 'E-commerce Stark', status: 'active', tenantId: 'stark' },
  { id: '12', name: 'Internal Tools Initech', status: 'active', tenantId: 'initech' },
];

export class ProjectRepository {
  async getByTenant(tenantId: string, filter: ProjectFilter = "all"): Promise<Project[]> {
    // Simulamos un delay de red
    await new Promise((resolve) => setTimeout(resolve, 100));
    const forTenant = MOCK_PROJECTS.filter((p) => p.tenantId === tenantId);
    return filterProjectsByStatus(forTenant, filter);
  }

  async getById(id: string, tenantId?: string): Promise<Project | null> {
    const found = MOCK_PROJECTS.find((p) => p.id === id) || null;
    if (!found) return null;
    if (tenantId && found.tenantId !== tenantId) return null;
    return found;
  }
}
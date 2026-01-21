import { Project } from "@/domain/models/Project";

const MOCK_PROJECTS: Project[] = [
  { id: '1', name: 'Web Acme', status: 'active', tenantId: 'acme' },
  { id: '2', name: 'App Umbrella', status: 'active', tenantId: 'umbrella' },
];

export class ProjectRepository {
  async getByTenant(tenantId: string): Promise<Project[]> {
    // Simulamos un delay de red
    await new Promise(resolve => setTimeout(resolve, 100));
    return MOCK_PROJECTS.filter(p => p.tenantId === tenantId);
  }

  async getById(id: string): Promise<Project | null> {
    return MOCK_PROJECTS.find(p => p.id === id) || null;
  }
}
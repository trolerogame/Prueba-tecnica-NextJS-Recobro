// src/application/services/ProjectService.ts
import { ProjectRepository } from "@/infrastructure/repositories/MockProjectRepository";
import { ProjectMapper } from "@/infrastructure/mappers/ProjectMapper";

const repo = new ProjectRepository();

export const ProjectService = {
  async getProjectsForTenant(tenantId: string) {
    const dtos = await repo.getByTenant(tenantId);
    return ProjectMapper.toDomainArray(dtos);
  },

  async getProjectDetail(tenantId: string, projectId: string) {
    const dto = await repo.getById(projectId);
    
    if (!dto) {
      throw new Error("Acceso no autorizado o proyecto no encontrado");
    }

    const project = ProjectMapper.toDomain(dto);
    
    // VALIDACIÓN DE SEGURIDAD MULTI-TENANT
    if (project.tenantId !== tenantId) {
      throw new Error("Acceso no autorizado o proyecto no encontrado");
    }
    
    return project;
  }
};
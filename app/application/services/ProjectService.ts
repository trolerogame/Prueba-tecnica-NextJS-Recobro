// src/application/services/ProjectService.ts
import { ProjectRepository } from "@/infrastructure/repositories/MockProjectRepository";
import { ProjectMapper } from "@/infrastructure/mappers/ProjectMapper";
import { ProjectFilter } from "@/domain/utils/filterProjects";

const repo = new ProjectRepository();

export const ProjectService = {
  async getProjectsForTenant(tenantId: string, filter?: ProjectFilter) {
    const dtos = await repo.getByTenant(tenantId, filter);
    return ProjectMapper.toDomainArray(dtos);
  },

  async getProjectDetail(tenantId: string, projectId: string) {
    const dto = await repo.getById(projectId, tenantId as any);

    if (!dto) {
      throw new Error("Acceso no autorizado o proyecto no encontrado");
    }

    const project = ProjectMapper.toDomain(dto);

    return project;
  }
};
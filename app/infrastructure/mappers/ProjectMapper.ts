import { Project } from "@/domain/models/Project";
import { ProjectDTO } from "@/infrastructure/dto/ProjectDTO";

export function toDomain(dto: ProjectDTO): Project {
  return {
    id: dto.id,
    name: dto.name,
    status: dto.status,
    tenantId: dto.tenantId,
  };
}

export function toDTO(project: Project): ProjectDTO {
  return {
    id: project.id,
    name: project.name,
    status: project.status,
    tenantId: project.tenantId,
  };
}

export function toDomainArray(dtos: ProjectDTO[]): Project[] {
  return dtos.map(toDomain);
}

export function toDTOArray(projects: Project[]): ProjectDTO[] {
  return projects.map(toDTO);
}

export const ProjectMapper = {
  toDomain,
  toDTO,
  toDomainArray,
  toDTOArray,
};

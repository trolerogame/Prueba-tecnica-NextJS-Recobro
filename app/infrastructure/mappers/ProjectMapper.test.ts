import { describe, it, expect } from 'vitest'
import { toDomain, toDTO, toDomainArray, toDTOArray } from './ProjectMapper'
import { ProjectDTO } from '@/infrastructure/dto/ProjectDTO'
import { Project } from '@/domain/models/Project'

describe('ProjectMapper', () => {
  const dto: ProjectDTO = {
    id: '1',
    name: 'Test Project',
    status: 'active',
    tenantId: 'tenant1',
  }

  const domain: Project = {
    id: '2',
    name: 'Domain Project',
    status: 'archived',
    tenantId: 'tenant2',
  }

  it('toDomain maps fields correctly', () => {
    const d = toDomain(dto)
    expect(d).toEqual({
      id: dto.id,
      name: dto.name,
      status: dto.status,
      tenantId: dto.tenantId,
    })
  })

  it('toDTO maps fields correctly', () => {
    const out = toDTO(domain)
    expect(out).toEqual({
      id: domain.id,
      name: domain.name,
      status: domain.status,
      tenantId: domain.tenantId,
    })
  })

  it('toDomainArray maps arrays', () => {
    const arr = [dto, { ...dto, id: '3' }]
    const res = toDomainArray(arr)
    expect(res).toHaveLength(2)
    expect(res[0].id).toBe('1')
    expect(res[1].id).toBe('3')
  })

  it('toDTOArray maps arrays', () => {
    const arr: Project[] = [domain, { ...domain, id: '4' }]
    const res = toDTOArray(arr)
    expect(res).toHaveLength(2)
    expect(res[0].id).toBe('2')
    expect(res[1].id).toBe('4')
  })
})

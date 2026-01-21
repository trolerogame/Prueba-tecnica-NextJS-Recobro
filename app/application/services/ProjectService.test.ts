import { describe, it, expect } from 'vitest'
import { ProjectService } from './ProjectService'

describe('ProjectService (multi-tenant validations)', () => {
  it('returns projects for a tenant (all)', async () => {
    const projects = await ProjectService.getProjectsForTenant('acme')
    expect(Array.isArray(projects)).toBe(true)
    expect(projects.length).toBeGreaterThanOrEqual(0)
    expect(projects.every(p => p.tenantId === 'acme')).toBe(true)
  })

  it('returns filtered projects for a tenant (active)', async () => {
    const projects = await ProjectService.getProjectsForTenant('acme', 'active')
    expect(Array.isArray(projects)).toBe(true)
    expect(projects.every(p => p.status === 'active')).toBe(true)
    expect(projects.every(p => p.tenantId === 'acme')).toBe(true)
  })

  it('getProjectDetail returns project when tenant matches', async () => {
    const list = await ProjectService.getProjectsForTenant('acme')
    expect(list.length).toBeGreaterThan(0)
    const firstId = list[0].id
    const project = await ProjectService.getProjectDetail('acme', firstId)
    expect(project).toBeDefined()
    expect(project.tenantId).toBe('acme')
    expect(project.id).toBe(firstId)
  })

  it('getProjectDetail throws when tenant does not own the project', async () => {
    const list = await ProjectService.getProjectsForTenant('acme')
    expect(list.length).toBeGreaterThan(0)
    const firstId = list[0].id
    await expect(() => ProjectService.getProjectDetail('umbrella', firstId)).rejects.toThrow(
      'Acceso no autorizado o proyecto no encontrado'
    )
  })
})

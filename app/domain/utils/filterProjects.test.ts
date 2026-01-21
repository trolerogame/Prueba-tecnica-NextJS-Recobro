import { describe, it, expect } from 'vitest'
import filterProjectsByStatus from './filterProjects'
import { Project } from '@/domain/models/Project'

describe('filterProjectsByStatus', () => {
  const projects: Project[] = [
    { id: '1', name: 'A', status: 'active', tenantId: 't1' },
    { id: '2', name: 'B', status: 'archived', tenantId: 't1' },
    { id: '3', name: 'C', status: 'active', tenantId: 't1' },
  ]

  it('returns all when filter is all', () => {
    const res = filterProjectsByStatus(projects, 'all')
    expect(res).toHaveLength(3)
  })

  it('returns only active projects', () => {
    const res = filterProjectsByStatus(projects, 'active')
    expect(res).toHaveLength(2)
    expect(res.every(p => p.status === 'active')).toBe(true)
  })

  it('returns only archived projects', () => {
    const res = filterProjectsByStatus(projects, 'archived')
    expect(res).toHaveLength(1)
    expect(res[0].status).toBe('archived')
  })

  it('defaults to all when filter omitted', () => {
    const res = filterProjectsByStatus(projects as any)
    expect(res).toHaveLength(3)
  })
})

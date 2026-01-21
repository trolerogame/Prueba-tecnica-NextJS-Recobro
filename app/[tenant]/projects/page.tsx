import Link from "next/link";
import FilterToggle from "@/components/client/FilterToggle";
import ProjectsService from "@/components/server/ProjectsService";
import { ProjectFilter } from "@/domain/utils/filterProjects";

export default async function ProjectsPage({ params, searchParams }: { params: Promise<{ tenant: string }>; searchParams?: Promise<{ filter?: string }> }) {
  const { tenant } = await params;
  const resolvedSearch = searchParams ? await searchParams : undefined;
  const filter = (resolvedSearch?.filter as ProjectFilter) || "all";

  return (
    <ProjectsService tenant={tenant} filter={filter}>
      {({ projects }) => (
        <main className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Proyectos - {tenant.toUpperCase()}</h1>
            <div>
              <FilterToggle initial={filter} tenant={tenant} />
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            {projects.length === 0 ? (
              <p className="text-gray-500">No hay proyectos disponibles</p>
            ) : (
              <ul className="space-y-2">
                {projects.map((project) => (
                  <li key={project.id} className="border-b pb-2">
                    <Link
                      href={`/${tenant}/projects/${project.id}`}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {project.name} <span className="text-gray-600">({project.status})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>
      )}
    </ProjectsService>
  );
}

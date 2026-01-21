import { ProjectService } from "@/application/services/ProjectService";
import Link from "next/link";

export default async function ProjectsPage({ params }: { params: Promise<{ tenant: string }> }) {
  const { tenant } = await params;
  const projects = await ProjectService.getProjectsForTenant(tenant);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Proyectos - {tenant.toUpperCase()}</h1>

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
  );
}

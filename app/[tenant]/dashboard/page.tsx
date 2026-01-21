import Link from "next/link";
import DashboardService from "@/components/server/DashboardService";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ tenant: string }>;
}) {
  const { tenant } = await params;

  return (
    <DashboardService tenant={tenant}>
      {({ projects }) => (
        <main className="p-8">
          <h1 className="text-3xl font-bold mb-6">{tenant.toUpperCase()}</h1>

          <div className="bg-white shadow rounded-lg p-6 inline-block">
            <p className="text-lg">Proyectos totales:</p>
            <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-lg font-medium bg-gray-100 text-gray-800">{projects.length}</div>
            <div className="mt-4">
              <Link href={`/${tenant}/projects`} className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Ver proyectos
              </Link>
            </div>
          </div>
        </main>
      )}
    </DashboardService>
  );
}
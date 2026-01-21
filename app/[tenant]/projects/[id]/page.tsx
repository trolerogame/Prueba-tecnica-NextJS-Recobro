import { ProjectService } from "@/application/services/ProjectService";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ tenant: string; id: string }>
}) {
  try {
    const { tenant, id } = await params;
    console.log(tenant, id)
    const project = await ProjectService.getProjectDetail(tenant, id);

    return (
      <main>
        <h1>{project.name}</h1>
        <p>Status: {project.status}</p>
      </main>
    );
  } catch (error) {
    notFound();
  }
}
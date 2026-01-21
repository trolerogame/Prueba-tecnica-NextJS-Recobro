import { notFound } from "next/navigation";
import ProjectDetailService from "@/components/server/ProjectDetailService";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ tenant: string; id: string }>;
}) {
  try {
    const { tenant, id } = await params;

    return (
      <ProjectDetailService tenant={tenant} id={id}>
        {({ project }) => (
          <main>
            <h1>{project.name}</h1>
            <p>Status: {project.status}</p>
          </main>
        )}
      </ProjectDetailService>
    );
  } catch (error) {
    notFound();
  }
}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProjectStatus } from "@/domain/models/Project";

export type FilterOption = "all" | ProjectStatus;

export default function FilterToggle({
  initial = "all",
  onChange,
  tenant,
}: {
  initial?: FilterOption;
  onChange?: (filter: FilterOption) => void;
  tenant?: string;
}) {
  const [filter, setFilter] = useState<FilterOption>(initial);
  const router = useRouter();

  function toggleTo(next: FilterOption) {
    setFilter(next);
    if (onChange) {
      onChange(next);
      return;
    }

    if (tenant) {
      const base = `/${tenant}/projects`;
      const url = next === "all" ? base : `${base}?filter=${next}`;
      router.push(url);
    }
  }

  return (
    <div className="inline-flex gap-2">
      <button
        type="button"
        onClick={() => toggleTo("all")}
        className={`px-3 py-1 rounded ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}`}
      >
        Todos
      </button>
      <button
        type="button"
        onClick={() => toggleTo("active")}
        className={`px-3 py-1 rounded ${filter === "active" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}`}
      >
        Activos
      </button>
      <button
        type="button"
        onClick={() => toggleTo("archived")}
        className={`px-3 py-1 rounded ${filter === "archived" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}`}
      >
        Archivados
      </button>
    </div>
  );
}

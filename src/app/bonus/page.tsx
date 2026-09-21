"use client";

import { useState } from "react";
import { ApplicantTodos } from "@/components/applicant-todos";
import { sampleVenues } from "@/lib/sample-data";

/**
 * Open canvas for an optional extra. Replace this page with anything
 * that makes USTFood more useful — as long as you can defend it.
 */

export default function BonusPage() {
  const [query, setQuery] = useState("");
  // TODO: search, map, or favorites — e.g. filter sampleVenues by `query`.
  const matches = sampleVenues.filter((venue) =>
    venue.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-5 py-10 sm:px-8 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-primary mb-3 text-sm font-semibold tracking-wide uppercase">
          Bonus
        </p>
        <h1 className="text-4xl leading-tight font-bold sm:text-5xl">
          Make something extra.
        </h1>
        <p className="text-base-content/70 mt-5 text-lg leading-8">
          Optional. Use this page for one extra you can finish well and defend
          as feasible. Search, a map, favorites, or something else that helps a
          student decide where to eat.
        </p>
      </header>
    </div>
  );
}

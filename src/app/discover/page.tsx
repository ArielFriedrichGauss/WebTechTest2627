"use client";

import { useState } from "react";
import Link from "next/link";
import { ApplicantTodos } from "@/components/applicant-todos";
import { sampleVenues } from "@/lib/sample-data";

/**
 * Discovery layout canvas — scan, filter, and compare food options.
 * One sample result is provided; filters and the rest of the list are yours.
 * Sample venues live in src/lib/sample-data.ts.
 */

const FILTERS = ["Canteen", "$", "Open now", "Wait < 15 min"] as const;

export default function DiscoverPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // TODO: use `activeFilter` (and a search query) to filter/sort `sampleVenues`.
  const results = sampleVenues.slice(0, 1);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-5 py-10 sm:px-8 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-primary mb-3 text-sm font-semibold tracking-wide uppercase">
          Discover
        </p>
        <h1 className="text-4xl leading-tight font-bold sm:text-5xl">
          Where should I eat?
        </h1>
        <p className="text-base-content/70 mt-5 text-lg leading-8">
          Layout for browsing canteens, cafés, restaurants, takeaway, and nearby
          spots. Filters, sorting, and comparison belong here.
        </p>
      </header>

      <section>
        <h2 className="text-lg font-semibold">Filters and search</h2>
        <p className="text-base-content/60 mt-2 text-sm leading-6">
          Cuisine, price, location, hours, wait, and ratings.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {FILTERS.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() =>
                setActiveFilter((current) => (current === label ? null : label))
              }
              className={`rounded-full border px-3 py-1.5 text-sm ${
                activeFilter === label
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-base-content/15 bg-neutral text-base-content/70"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {results.map((venue) => (
        <Link
          key={venue.id}
          href={`/venues/${venue.id}`}
          className="bg-neutral border-base-content/15 hover:border-primary/40 max-w-md rounded-xl border p-5 shadow-sm transition-colors"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold">{venue.name}</h2>
              <p className="text-base-content/70 mt-1 text-sm">
                {venue.building}
              </p>
            </div>
            <span className="bg-primary/10 text-primary shrink-0 rounded-full px-2.5 py-1 text-xs font-medium">
              {venue.kind}
            </span>
          </div>
          <p className="text-base-content/70 mt-3 text-sm leading-6">
            {venue.cuisine.join(" · ")}
          </p>
          <p className="text-base-content/50 mt-4 text-sm">
            {venue.priceRange} · {venue.rating.toFixed(1)} ({venue.reviewCount})
            · ~{venue.estimatedWaitMinutes} min wait
          </p>
        </Link>
      ))}

      <ApplicantTodos
        items={[
          "Render the remaining venues from src/lib/sample-data.ts (this card is only an example).",
          "Make search, filters, and sorting actually change the list.",
          "Keep the path to a venue detail page (or replace routing if you have a better flow).",
        ]}
      />
    </div>
  );
}

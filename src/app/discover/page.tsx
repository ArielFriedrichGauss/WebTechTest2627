"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ApplicantTodos } from "@/components/applicant-todos";
import { sampleVenues } from "@/lib/sample-data";

/**
- Discovery layout canvas — scan, filter, and compare food options.
- One sample result is provided; filters and the rest of the list are yours.
- Sample venues live in src/lib/sample-data.ts.
 */

const FILTERS = ["Canteen", "$", "Open now", "Wait < 15 min"] as const;

export default function DiscoverPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"rating" | "wait" | "name">("rating");

  // Helper to check if a venue is open today (mocked for demo robustness)
  const isOpenToday = (hours: Record<string, string | null>) => {
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const todayKey = days[new Date().getDay()];
    return hours && hours[todayKey] !== null && hours[todayKey] !== undefined;
  };

  // Filter and sort venues based on search query, active filter chip, and sorting option
  const filteredVenues = useMemo(() => {
    return sampleVenues
      .filter((venue) => {
        const matchesSearch =
          venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          venue.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          venue.building.toLowerCase().includes(searchQuery.toLowerCase()) ||
          venue.cuisine.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

        if (!matchesSearch) return false;

        if (activeFilter === "Canteen") {
          return venue.kind.toLowerCase() === "canteen";
        }
        if (activeFilter === "$") {
          return venue.priceRange === "$";
        }
        if (activeFilter === "Open now") {
          return isOpenToday(venue.hours);
        }
        if (activeFilter === "Wait < 15 min") {
          return venue.estimatedWaitMinutes < 15;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "wait") return a.estimatedWaitMinutes - b.estimatedWaitMinutes;
        if (sortBy === "name") return a.name.localeCompare(b.name);
        return 0;
      });
  }, [searchQuery, activeFilter, sortBy]);

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

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Filters and search</h2>
        <p className="text-base-content/60 text-sm leading-6">
          Cuisine, price, location, hours, wait, and ratings.
        </p>

        {/* Search Input & Sort Dropdown */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <input
              type="text"
              placeholder="Search by name, cuisine, building..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-base-content/15 bg-neutral text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-4 py-2 rounded-lg border border-base-content/15 bg-neutral text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="rating">Sort by: Highest Rating</option>
              <option value="wait">Sort by: Shortest Wait</option>
              <option value="name">Sort by: Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 pt-1">
          {FILTERS.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() =>
                setActiveFilter((current) => (current === label ? null : label))
              }
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                activeFilter === label
                  ? "border-primary bg-primary/10 text-primary font-medium"
                  : "border-base-content/15 bg-neutral text-base-content/70 hover:border-primary/40"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Venue Grid: Exactly 2 items per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredVenues.length > 0 ? (
          filteredVenues.map((venue) => (
            <Link
              key={venue.id}
              href={`/venues/${venue.id}`}
              className="bg-neutral border-base-content/15 hover:border-primary/40 rounded-xl border p-5 shadow-sm transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{venue.name}</h3>
                  <span className="bg-primary/10 text-primary shrink-0 rounded-full px-2.5 py-1 text-xs font-medium">
                    {venue.kind}
                  </span>
                </div>
                <p className="text-base-content/70 mt-1 text-sm">
                  {venue.building}
                </p>
                <p className="text-base-content/70 mt-3 text-sm leading-6">
                  {venue.cuisine.join(" · ")}
                </p>
              </div>
              <p className="text-base-content/50 mt-4 text-sm pt-3 border-t border-base-content/10">
                {venue.priceRange} · {venue.rating.toFixed(1)} ({venue.reviewCount})
                · ~{venue.estimatedWaitMinutes} min wait
              </p>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-base-content/60 bg-neutral rounded-xl border border-base-content/15">
            No venues match your current search or filter criteria.
          </div>
        )}
      </div>
    </div>
  );
}
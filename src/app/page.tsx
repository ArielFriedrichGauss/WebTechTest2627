"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { sampleVenues } from "@/lib/sample-data";
import { isOpenNow } from "@/lib/opening-hours";
import type { PriceRange } from "@/lib/types";

const PRICE_OPTIONS: PriceRange[] = ["$", "$$", "$$$"];
const SORT_OPTIONS = [
  { value: "rating", label: "Highest rated" },
  { value: "wait", label: "Shortest wait" },
] as const;
type SortValue = (typeof SORT_OPTIONS)[number]["value"];

const CUISINE_OPTIONS = Array.from(
  new Set(sampleVenues.flatMap((venue) => venue.cuisine)),
).sort();

const MAX_COMPARE = 3;

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState<string | null>(null);
  const [price, setPrice] = useState<PriceRange | null>(null);
  const [openNowOnly, setOpenNowOnly] = useState(false);
  const [sort, setSort] = useState<SortValue>("rating");
  const [selected, setSelected] = useState<string[]>([]);

  function toggleSelected(id: string) {
    setSelected((current) => {
      if (current.includes(id)) return current.filter((v) => v !== id);
      if (current.length >= MAX_COMPARE) return current;
      return [...current, id];
    });
  }

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = sampleVenues.filter((venue) => {
      if (
        normalizedQuery &&
        !venue.name.toLowerCase().includes(normalizedQuery) &&
        !venue.cuisine.some((c) => c.toLowerCase().includes(normalizedQuery))
      ) {
        return false;
      }
      if (cuisine && !venue.cuisine.includes(cuisine)) return false;
      if (price && venue.priceRange !== price) return false;
      if (openNowOnly && !isOpenNow(venue.hours)) return false;
      return true;
    });

    return [...filtered].sort((a, b) =>
      sort === "rating"
        ? b.rating - a.rating
        : a.estimatedWaitMinutes - b.estimatedWaitMinutes,
    );
  }, [query, cuisine, price, openNowOnly, sort]);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-8 sm:px-8 sm:py-12">
      <header className="max-w-3xl">
        <p className="text-primary mb-2 text-sm font-semibold tracking-wide uppercase">
          USThing · USTFood
        </p>
        <h1 className="text-3xl leading-tight font-bold sm:text-4xl">
          Where should I eat?
        </h1>
        <p className="text-base-content/70 mt-3 text-base leading-7">
          Canteens, cafés, restaurants, takeaway, and nearby spots around
          HKUST — filtered and sorted so you can decide between classes.
        </p>
      </header>

      <div className="flex flex-col gap-3">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by name or cuisine…"
          className="border-base-content/15 bg-neutral w-full rounded-lg border px-3 py-2 text-sm"
        />

        <div className="flex flex-wrap gap-2">
          <select
            value={cuisine ?? ""}
            onChange={(event) => setCuisine(event.target.value || null)}
            className="border-base-content/15 bg-neutral rounded-lg border px-3 py-1.5 text-sm"
          >
            <option value="">All cuisines</option>
            {CUISINE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <div className="flex gap-1.5">
            {PRICE_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() =>
                  setPrice((current) => (current === option ? null : option))
                }
                className={`rounded-full border px-3 py-1.5 text-sm ${
                  price === option
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-base-content/15 bg-neutral text-base-content/70"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpenNowOnly((current) => !current)}
            className={`rounded-full border px-3 py-1.5 text-sm ${
              openNowOnly
                ? "border-primary bg-primary/10 text-primary"
                : "border-base-content/15 bg-neutral text-base-content/70"
            }`}
          >
            Open now
          </button>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortValue)}
            className="border-base-content/15 bg-neutral ml-auto rounded-lg border px-3 py-1.5 text-sm"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {results.map((venue) => (
          <Link
            key={venue.id}
            href={`/venues/${venue.id}`}
            className="bg-neutral border-base-content/15 hover:border-primary/40 flex flex-col rounded-xl border p-5 shadow-sm transition-colors"
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
              {venue.priceRange} · {venue.rating.toFixed(1)} (
              {venue.reviewCount}) · ~{venue.estimatedWaitMinutes} min est.
              wait
            </p>
            <p
              className={`mt-2 text-xs font-medium ${
                isOpenNow(venue.hours) ? "text-success-content" : "text-base-content/40"
              }`}
            >
              {isOpenNow(venue.hours) ? "Open now" : "Closed now"}
            </p>

            <label
              className="text-base-content/70 mt-3 flex w-fit items-center gap-2 text-xs"
              onClick={(event) => {
                // Stop this from bubbling to the parent <Link> and navigating.
                event.preventDefault();
                event.stopPropagation();
                toggleSelected(venue.id);
              }}
            >
              <input
                type="checkbox"
                readOnly
                checked={selected.includes(venue.id)}
                disabled={
                  !selected.includes(venue.id) && selected.length >= MAX_COMPARE
                }
                className="h-3.5 w-3.5"
              />
              Compare
            </label>
          </Link>
        ))}

        {results.length === 0 && (
          <p className="text-base-content/60 col-span-full text-sm">
            No venues match these filters. Try clearing one of them.
          </p>
        )}
      </section>

      {selected.length >= 2 && (
        <div className="bg-neutral border-base-content/15 sticky bottom-4 mx-auto flex w-fit items-center gap-3 rounded-full border px-4 py-2 shadow-md">
          <span className="text-sm">{selected.length} selected</span>
          <Link
            href={`/compare?ids=${selected.join(",")}`}
            className="bg-primary text-primary-content rounded-full px-3 py-1.5 text-sm font-medium"
          >
            Compare
          </Link>
        </div>
      )}
    </div>
  );
}

import Link from "next/link";
import { ApplicantTodos } from "@/components/applicant-todos";
import { sampleVenues } from "@/lib/sample-data";

/**
- Venues layout canvas — a catalogue of places, linking into detail.
- One sample card is provided; the rest of the list is yours.
- Sample venues live in src/lib/sample-data.ts.
 */

export default function VenuesPage() {
  // Drop slice(0, 1) and map the full catalogue of venues.
  const venues = sampleVenues;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-5 py-10 sm:px-8 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-primary mb-3 text-sm font-semibold tracking-wide uppercase">
          Venues
        </p>
        <h1 className="text-4xl leading-tight font-bold sm:text-5xl">
          Places to eat around HKUST.
        </h1>
        <p className="text-base-content/70 mt-5 text-lg leading-8">
          Layout for browsing venues before opening a detail page with hours,
          menu, and reviews.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {venues.map((venue) => (
          <Link
            key={venue.id}
            href={`/venues/${venue.id}`}
            className="bg-neutral border-base-content/15 hover:border-primary/40 rounded-xl border p-5 shadow-sm transition-colors flex flex-col justify-between"
          >
            <div>
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
                {venue.summary}
              </p>
            </div>
            <p className="text-base-content/50 mt-4 text-sm pt-3 border-t border-base-content/10">
              {venue.priceRange} · {venue.rating.toFixed(1)} ({venue.reviewCount})
              · ~{venue.estimatedWaitMinutes} min wait
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
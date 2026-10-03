import Link from "next/link";
import { notFound } from "next/navigation";
import { getReviewsForVenue, getVenueById } from "@/lib/sample-data";
import { isOpenNow } from "@/lib/opening-hours";
import { VenueReviews } from "@/components/venue-reviews";
import type { Weekday } from "@/lib/types";

type VenuePageProps = {
  params: Promise<{ id: string }>;
};

const WEEKDAY_LABELS: { key: Weekday; label: string }[] = [
  { key: "mon", label: "Mon" },
  { key: "tue", label: "Tue" },
  { key: "wed", label: "Wed" },
  { key: "thu", label: "Thu" },
  { key: "fri", label: "Fri" },
  { key: "sat", label: "Sat" },
  { key: "sun", label: "Sun" },
];

export default async function VenuePage({ params }: VenuePageProps) {
  const { id } = await params;
  const venue = getVenueById(id);

  if (!venue) {
    notFound();
  }

  const reviews = getReviewsForVenue(venue.id);
  const open = isOpenNow(venue.hours);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-5 py-10 sm:px-8">
      <div>
        <Link href="/" className="text-primary text-sm font-medium">
          ← Back to Discover
        </Link>

        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold">{venue.name}</h1>
            <p className="text-base-content/70 mt-1">{venue.building}</p>
            <p className="text-base-content/60 mt-1 text-sm">
              {venue.locationNote}
            </p>
          </div>
          <span className="bg-primary/10 text-primary shrink-0 rounded-full px-2.5 py-1 text-xs font-medium">
            {venue.kind}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <span className="text-base-content/70">{venue.priceRange}</span>
          <span className="text-base-content/70">
            ~{venue.estimatedWaitMinutes} min estimated wait
          </span>
          <span
            className={`font-medium ${
              open ? "text-success-content" : "text-base-content/40"
            }`}
          >
            {open ? "Open now" : "Closed now"}
          </span>
        </div>
      </div>

      <section>
        <h2 className="text-lg font-semibold">Opening hours</h2>
        <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:grid-cols-4">
          {WEEKDAY_LABELS.map(({ key, label }) => (
            <div key={key} className="flex justify-between gap-2 sm:block">
              <dt className="text-base-content/50">{label}</dt>
              <dd>{venue.hours[key] ?? "Closed"}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Menu</h2>
        <div className="mt-3 space-y-5">
          {venue.menu.map((category) => (
            <div key={category.category}>
              <h3 className="text-base-content/60 text-xs font-semibold tracking-wide uppercase">
                {category.category}
              </h3>
              <ul className="mt-2 space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-baseline justify-between gap-3 text-sm"
                  >
                    <span>
                      {item.name}
                      {item.available === false && (
                        <span className="text-base-content/40 ml-2 text-xs">
                          (unavailable)
                        </span>
                      )}
                    </span>
                    {item.priceHkd != null && (
                      <span className="text-base-content/60 shrink-0">
                        ${item.priceHkd}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <VenueReviews
        venueId={venue.id}
        initialReviews={reviews}
        baseRating={venue.rating}
        baseReviewCount={venue.reviewCount}
      />
    </div>
  );
}

import Link from "next/link";
import { getVenueById } from "@/lib/sample-data";
import { isOpenNow } from "@/lib/opening-hours";

type ComparePageProps = {
  searchParams: Promise<{ ids?: string }>;
};

const ROWS: {
  label: string;
  render: (venue: NonNullable<ReturnType<typeof getVenueById>>) => React.ReactNode;
}[] = [
  { label: "Cuisine", render: (v) => v.cuisine.join(", ") },
  { label: "Price", render: (v) => v.priceRange },
  { label: "Location", render: (v) => `${v.building} — ${v.locationNote}` },
  {
    label: "Status",
    render: (v) => (isOpenNow(v.hours) ? "Open now" : "Closed now"),
  },
  { label: "Estimated wait", render: (v) => `~${v.estimatedWaitMinutes} min` },
  { label: "Rating", render: (v) => `★ ${v.rating.toFixed(1)} (${v.reviewCount})` },
];

export default async function ComparePage({ searchParams }: ComparePageProps) {
  const { ids } = await searchParams;
  const venues = (ids ?? "")
    .split(",")
    .map((id) => getVenueById(id.trim()))
    .filter((venue): venue is NonNullable<typeof venue> => Boolean(venue));

  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
      <Link href="/" className="text-primary text-sm font-medium">
        ← Back to Discover
      </Link>
      <h1 className="mt-4 text-3xl font-bold">Compare</h1>

      {venues.length < 2 ? (
        <p className="text-base-content/70 mt-4 text-sm">
          Select 2–3 venues from{" "}
          <Link href="/" className="text-primary font-medium">
            Discover
          </Link>{" "}
          to compare them here.
        </p>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="w-32" />
                {venues.map((venue) => (
                  <th
                    key={venue.id}
                    className="border-base-content/15 border-b px-3 py-2 text-left font-semibold"
                  >
                    <Link href={`/venues/${venue.id}`} className="text-primary">
                      {venue.name}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label}>
                  <th className="text-base-content/50 border-base-content/10 border-b px-3 py-2 text-left align-top font-medium">
                    {row.label}
                  </th>
                  {venues.map((venue) => (
                    <td
                      key={venue.id}
                      className="border-base-content/10 border-b px-3 py-2 align-top"
                    >
                      {row.render(venue)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

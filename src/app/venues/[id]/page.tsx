import Link from "next/link";
import { notFound } from "next/navigation";
import { ApplicantTodos } from "@/components/applicant-todos";
import { getReviewsForVenue, getVenueById } from "@/lib/sample-data";

type VenuePageProps = {
  params: Promise<{ id: string }>;
};

/**
 * A route exists so you can link from discovery to detail.
 * The page currently only confirms the venue id — design the real view.
 */
export default async function VenuePage({ params }: VenuePageProps) {
  const { id } = await params;
  const venue = getVenueById(id);

  if (!venue) {
    notFound();
  }

  const firstDish = venue.menu[0];
  const reviews = getReviewsForVenue(venue.id);

  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
      <Link href="/venues" className="text-primary text-sm font-medium">
        Back to venues
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{venue.name}</h1>
      <p className="text-base-content/70 mt-2">{venue.building}</p>
      <p className="text-base-content/60 mt-1 text-sm">{venue.locationNote}</p>

      {firstDish && (
        <p className="text-base-content/70 mt-6 text-sm">
          {firstDish.name}
          {firstDish.priceHkd != null ? ` · $${firstDish.priceHkd}` : ""}
        </p>
      )}

      {/* TODO: hours, wait, rating, the rest of venue.menu, and the reviews below. */}
      <p className="text-base-content/50 mt-4 text-sm">
        {reviews.length} sample review(s) in data — render them here.
      </p>

      <div className="mt-8">
        <ApplicantTodos
          items={[
            "Show hours, location, wait, price, and rating so this page can stand as an inspect view.",
            "Render the venue menu from sample data (or an equally clear substitute).",
            "Surface reviews for this venue, and link to writing one if that lives elsewhere.",
            "Replace this routing approach if you have a better inspect flow.",
          ]}
        />
      </div>
    </div>
  );
}

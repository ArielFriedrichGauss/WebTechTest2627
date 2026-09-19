import Link from "next/link";
import { notFound } from "next/navigation";
import { getVenueById } from "@/lib/sample-data";

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

  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
      <Link href="/venues" className="text-primary text-sm font-medium">
        Back to venues
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{venue.name}</h1>
      <p className="text-base-content/70 mt-2">{venue.building}</p>
      <p className="border-base-content/20 mt-8 rounded-xl border border-dashed p-5">
        Build the venue / menu / reviews experience on this route, or replace
        the routing approach if you have a better one.
      </p>
    </div>
  );
}

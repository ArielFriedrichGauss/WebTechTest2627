/**
 * Venues layout canvas — a catalogue of places, linking into detail.
 * Sample venues live in src/lib/sample-data.ts.
 */

export default function VenuesPage() {
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

      <section className="border-base-content/20 rounded-xl border border-dashed p-6">
        <h2 className="text-lg font-semibold">Venue list</h2>
        <p className="text-base-content/60 mt-2 text-sm leading-6">
          Build the catalogue here. Sample data is in{" "}
          <code className="text-base-content/80">src/lib/sample-data.ts</code>{" "}
          — names, kinds, prices, locations, hours, wait, ratings, and a short
          menu per venue. Detail stubs are at{" "}
          <code className="text-base-content/80">/venues/[id]</code>.
        </p>
      </section>
    </div>
  );
}

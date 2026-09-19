/**
 * Discovery layout canvas — scan, filter, and compare food options.
 * Replace the placeholders with the real browse experience.
 */

export default function DiscoverPage() {
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

      <section className="border-base-content/20 rounded-xl border border-dashed p-6">
        <h2 className="text-lg font-semibold">Filters and search</h2>
        <p className="text-base-content/60 mt-2 text-sm leading-6">
          Cuisine, price, location, hours, wait, and ratings.
        </p>
      </section>

      <section className="border-base-content/20 rounded-xl border border-dashed p-6">
        <h2 className="text-lg font-semibold">Results</h2>
        <p className="text-base-content/60 mt-2 text-sm leading-6">
          Card or list layout for venues students can scan between classes.
        </p>
      </section>
    </div>
  );
}

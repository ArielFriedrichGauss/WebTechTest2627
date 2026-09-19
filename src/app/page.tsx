import Link from "next/link";

/**
 * Replace this starter canvas with your USTFood discovery experience.
 * Sample data lives in src/lib/sample-data.ts — expand it.
 */

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-5 py-10 sm:px-8 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-primary mb-3 text-sm font-semibold tracking-wide uppercase">
          USThing · USTFood
        </p>
        <h1 className="text-4xl leading-tight font-bold sm:text-5xl">
          Help HKUST students decide where to eat.
        </h1>
        <p className="text-base-content/70 mt-5 text-lg leading-8">
          What is currently here is simply a potential template you could
          follow. Feel free to change the layouts and user experience flow to
          your likings.
        </p>
      </header>

      <section className="border-base-content/20 rounded-xl border border-dashed p-6">
        <h2 className="text-lg font-semibold">Your work starts here</h2>
        <ul className="text-base-content/80 mt-3 list-disc space-y-2 pl-5 leading-6">
          <li>
            Discovery across canteens, cafés, restaurants, takeaway, and nearby
            spots
          </li>
          <li>
            Comparison using cuisine, price, location, hours, wait, and ratings
          </li>
          <li>Venue or menu detail</li>
          <li>A review, rating, or feedback flow (mock is fine)</li>
        </ul>
        <p className="text-base-content/60 mt-4 text-sm">
          Read README.md before you write UI. Delete this starter copy once the
          product can stand on its own. A stub detail route exists at{" "}
          <Link className="text-primary font-medium" href="/venues/lg1-canteen">
            /venues/lg1-canteen
          </Link>
          .
        </p>
      </section>
    </div>
  );
}

import Link from "next/link";
import { ApplicantTodos } from "@/components/applicant-todos";

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

      <ApplicantTodos
        title="Minimum to finish"
        items={[
          "Discover food options around HKUST (canteens, cafés, restaurants, takeaway, nearby).",
          "Let students compare cuisine, price, location, hours, wait, and ratings.",
          "Build a venue inspect view with a menu (or a clear substitute).",
          "Add a review / rate / feedback flow — local mock state is enough.",
          "Match USThing density, colour, and type (see docs/DESIGN.md).",
        ]}
      />

      <p className="text-base-content/60 max-w-3xl text-sm leading-6">
        Read README.md first. Sidebar routes are starter canvases with their own
        to-dos. Delete this copy once the product can stand on its own. A stub
        detail route exists at{" "}
        <Link className="text-primary font-medium" href="/venues/lg1-canteen">
          /venues/lg1-canteen
        </Link>
        .
      </p>
    </div>
  );
}

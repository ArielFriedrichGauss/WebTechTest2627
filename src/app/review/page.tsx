/**
 * Review layout canvas — rating and feedback, even as a realistic mock.
 * Replace the placeholders with the real review flow.
 */

export default function ReviewPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-5 py-10 sm:px-8 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-primary mb-3 text-sm font-semibold tracking-wide uppercase">
          Review
        </p>
        <h1 className="text-4xl leading-tight font-bold sm:text-5xl">
          Rate a meal, leave feedback.
        </h1>
        <p className="text-base-content/70 mt-5 text-lg leading-8">
          Layout for writing a review and seeing recent campus feedback. A mock
          with local state is enough.
        </p>
      </header>

      <section className="border-base-content/20 rounded-xl border border-dashed p-6">
        <h2 className="text-lg font-semibold">Write a review</h2>
        <p className="text-base-content/60 mt-2 text-sm leading-6">
          Venue picker, star rating, and a short comment.
        </p>
      </section>

      <section className="border-base-content/20 rounded-xl border border-dashed p-6">
        <h2 className="text-lg font-semibold">Recent reviews</h2>
        <p className="text-base-content/60 mt-2 text-sm leading-6">
          List of sample or newly submitted reviews.
        </p>
      </section>
    </div>
  );
}

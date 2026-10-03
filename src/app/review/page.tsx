"use client";

import { FormEvent, useState } from "react";
import { ApplicantTodos } from "@/components/applicant-todos";
import { getVenueById, sampleReviews, sampleVenues } from "@/lib/sample-data";

/**
- Review layout canvas — rating and feedback, even as a realistic mock.
- One sample review is provided; the form and the rest of the list are yours.
- Sample reviews live in src/lib/sample-data.ts.
 */

export default function ReviewPage() {
  const [reviews, setReviews] = useState(sampleReviews);
  const [comment, setComment] = useState("");
  const [selectedVenueId, setSelectedVenueId] = useState(sampleVenues[0]?.id || "");
  const [rating, setRating] = useState(5);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!comment.trim() || !selectedVenueId) return;

    const newReview = {
      id: `review-${Date.now()}`,
      venueId: selectedVenueId,
      author: "HKUST Student",
      rating: Number(rating),
      comment: comment.trim(),
      createdAt: new Date().toISOString().split("T")[0],
    };

    setReviews([newReview, ...reviews]);
    setComment("");
  }

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

      <form
        onSubmit={handleSubmit}
        className="bg-neutral border-base-content/15 max-w-md rounded-xl border p-5 shadow-sm"
      >
        <h2 className="text-lg font-semibold">Write a review</h2>
        <p className="text-base-content/60 mt-1 text-sm">
          Example fields — wire these up with local state.
        </p>
        <div className="mt-4 space-y-3">
          <label className="block">
            <span className="text-base-content/50 text-xs font-medium tracking-wide uppercase">
              Venue
            </span>
            <select
              value={selectedVenueId}
              onChange={(e) => setSelectedVenueId(e.target.value)}
              className="border-base-content/15 mt-1 block w-full rounded-lg border px-3 py-2 text-sm bg-neutral"
            >
              {sampleVenues.map((venue) => (
                <option key={venue.id} value={venue.id}>
                  {venue.name}
                </option>
              ))}
            </select>
          </label>
          <div>
            <p className="text-base-content/50 text-xs font-medium tracking-wide uppercase">
              Rating
            </p>
            <div className="mt-1 flex items-center space-x-1" aria-label={`Selected ${rating} out of 5 stars`}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-lg focus:outline-none ${
                    star <= rating ? "text-amber-500" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
              <span className="ml-2 text-sm text-base-content/70">({rating}/5)</span>
            </div>
          </div>
          <label className="block">
            <span className="text-base-content/50 text-xs font-medium tracking-wide uppercase">
              Comment
            </span>
            <textarea
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              rows={3}
              placeholder="Short note about the meal, wait, or value…"
              className="border-base-content/15 mt-1 block w-full rounded-lg border px-3 py-2 text-sm"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-primary text-primary-content mt-4 rounded-lg px-3 py-2 text-sm font-medium"
        >
          Submit
        </button>
      </form>

      <div className="space-y-4 max-w-md">
        {reviews.map((review) => {
          const venue = getVenueById(review.venueId);
          if (!venue) return null;
          return (
            <article
              key={review.id}
              className="bg-neutral border-base-content/15 rounded-xl border p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold">{venue.name}</h2>
                  <p className="text-base-content/70 mt-1 text-sm">
                    {review.author}
                  </p>
                </div>
                <span className="bg-primary/10 text-primary shrink-0 rounded-full px-2.5 py-1 text-xs font-medium">
                  {review.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-base-content/70 mt-3 text-sm leading-6">
                {review.comment}
              </p>
              <p className="text-base-content/50 mt-4 text-sm">
                {review.createdAt}
              </p>
            </article>
          );
        })}
      </div>

      /**<ApplicantTodos
        items={[
          "Turn the example fields into a working form (venue, rating, comment) with local state.",
          "Show the remaining reviews from src/lib/sample-data.ts — this card is only one sample.",
          "Append a new mock review to the list on submit (no backend required).",
          "Handle empty or invalid input so the flow still feels usable.",
        ]}
      />*/
    </div>
  );
}
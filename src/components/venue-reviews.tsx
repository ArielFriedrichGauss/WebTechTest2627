"use client";

// Client component: the review form needs local state and localStorage,
// neither of which exist on the server.
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import type { Review } from "@/lib/types";

type VenueReviewsProps = {
  venueId: string;
  initialReviews: Review[];
  baseRating: number;
  baseReviewCount: number;
};

function storageKey(venueId: string) {
  return `ustfood-reviews-${venueId}`;
}

export function VenueReviews({
  venueId,
  initialReviews,
  baseRating,
  baseReviewCount,
}: VenueReviewsProps) {
  const [localReviews, setLocalReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(5);
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  // Mock persistence: new reviews are saved per-venue in localStorage so
  // they survive a refresh, without needing a real backend.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey(venueId));
      if (saved) setLocalReviews(JSON.parse(saved));
    } catch {
      // Ignore malformed/unavailable storage — form still works for this session.
    }
  }, [venueId]);

  const allReviews = [...localReviews, ...initialReviews];
  const totalCount = baseReviewCount + localReviews.length;
  const average =
    totalCount === 0
      ? 0
      : (baseRating * baseReviewCount +
          localReviews.reduce((sum, review) => sum + review.rating, 0)) /
        totalCount;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!comment.trim()) return;

    const newReview: Review = {
      id: `local-${Date.now()}`,
      venueId,
      author: author.trim() || "You",
      rating,
      comment: comment.trim(),
      createdAt: new Date().toISOString().slice(0, 10),
    };

    const next = [newReview, ...localReviews];
    setLocalReviews(next);
    try {
      window.localStorage.setItem(storageKey(venueId), JSON.stringify(next));
    } catch {
      // Best-effort only — the review still shows for this session.
    }

    setComment("");
    setAuthor("");
    setRating(5);
  }

  return (
    <section>
      <h2 className="text-lg font-semibold">
        Reviews · ★ {average.toFixed(1)} ({totalCount})
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-neutral border-base-content/15 mt-3 max-w-md rounded-xl border p-4"
      >
        <p className="text-base-content/50 text-xs font-medium tracking-wide uppercase">
          Rating
        </p>
        <div className="mt-1 flex gap-1" role="radiogroup" aria-label="Rating">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              aria-label={`${value} star${value > 1 ? "s" : ""}`}
              aria-pressed={rating === value}
              onClick={() => setRating(value)}
              className="p-0.5"
            >
              <Star
                className={`h-5 w-5 ${
                  value <= rating
                    ? "fill-primary text-primary"
                    : "text-base-content/30"
                }`}
              />
            </button>
          ))}
        </div>

        <label className="mt-3 block">
          <span className="text-base-content/50 text-xs font-medium tracking-wide uppercase">
            Name (optional)
          </span>
          <input
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            placeholder="e.g. Year 2, SENG"
            className="border-base-content/15 mt-1 block w-full rounded-lg border px-3 py-2 text-sm"
          />
        </label>

        <label className="mt-3 block">
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

        <button
          type="submit"
          disabled={!comment.trim()}
          className="bg-primary text-primary-content mt-3 rounded-lg px-3 py-2 text-sm font-medium disabled:opacity-50"
        >
          Submit review
        </button>
      </form>

      <div className="mt-4 space-y-3">
        {allReviews.length === 0 && (
          <p className="text-base-content/60 text-sm">
            No reviews yet — be the first to leave one.
          </p>
        )}
        {allReviews.map((review) => (
          <article
            key={review.id}
            className="bg-neutral border-base-content/15 rounded-xl border p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-medium">{review.author}</p>
              <span className="bg-primary/10 text-primary shrink-0 rounded-full px-2 py-0.5 text-xs font-medium">
                {review.rating.toFixed(1)}
              </span>
            </div>
            <p className="text-base-content/70 mt-2 text-sm leading-6">
              {review.comment}
            </p>
            <p className="text-base-content/40 mt-2 text-xs">
              {review.createdAt}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

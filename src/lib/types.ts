/**
 * Suggested shapes for USTFood mock data.
 * You may change, extend, or replace these types.
 * Keep fields that help students decide where and what to eat.
 */

export type VenueKind =
  | "canteen"
  | "cafe"
  | "restaurant"
  | "takeaway"
  | "nearby";

export type PriceRange = "$" | "$$" | "$$$";

export type Weekday = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export type OpeningHours = Partial<Record<Weekday, string | null>>;

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  priceHkd?: number;
  tags?: string[];
  available?: boolean;
};

export type Review = {
  id: string;
  venueId: string;
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export type Venue = {
  id: string;
  name: string;
  kind: VenueKind;
  cuisine: string[];
  priceRange: PriceRange;
  building: string;
  locationNote: string;
  hours: OpeningHours;
  estimatedWaitMinutes: number;
  rating: number;
  reviewCount: number;
  summary: string;
  menu: MenuItem[];
};

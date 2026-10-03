import type { Review, Venue } from "./types";

/**
 * Format examples only — not a complete HKUST food catalogue.
 * Expand, correct, and replace this data. Real campus names and
 * hours do not need to be perfect, but they should feel local.
 */
export const sampleVenues: Venue[] = [
  {
    id: "lg1-canteen",
    name: "LG1 Canteen",
    kind: "canteen",
    cuisine: ["Hong Kong", "Asian mixed"],
    priceRange: "$",
    building: "Academic Building, LG1",
    locationNote: "Main academic concourse, below the Atrium.",
    hours: {
      mon: "07:30–21:00",
      tue: "07:30–21:00",
      wed: "07:30–21:00",
      thu: "07:30–21:00",
      fri: "07:30–21:00",
      sat: "08:00–18:00",
      sun: null,
    },
    estimatedWaitMinutes: 12,
    rating: 3.8,
    reviewCount: 214,
    summary: "Busy weekday canteen with several stalls and quick campus meals.",
    menu: [
      {
        category: "Rice & Noodles",
        items: [
          { id: "lg1-char-siu", name: "Char siu rice", priceHkd: 38, tags: ["popular"], available: true },
          { id: "lg1-tomato-soup", name: "Tomato soup noodles", priceHkd: 32, available: true },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: "lg1-veg", name: "Stir-fried greens", priceHkd: 12, available: true },
        ],
      },
    ],
  },
  {
    id: "mcdonalds-concourse",
    name: "McDonald's",
    kind: "takeaway",
    cuisine: ["Fast food", "Western"],
    priceRange: "$",
    building: "Academic Concourse",
    locationNote: "Near the main student thoroughfare.",
    hours: {
      mon: "07:00–23:00",
      tue: "07:00–23:00",
      wed: "07:00–23:00",
      thu: "07:00–23:00",
      fri: "07:00–23:00",
      sat: "07:00–23:00",
      sun: "08:00–23:00",
    },
    estimatedWaitMinutes: 8,
    rating: 3.6,
    reviewCount: 481,
    summary: "Predictable, fast, and open later than most campus canteens.",
    menu: [
      {
        category: "Combos",
        items: [
          { id: "mcd-mcchicken", name: "McChicken meal", priceHkd: 38, tags: ["combo"], available: true },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: "mcd-fries", name: "Medium fries", priceHkd: 14, available: true },
        ],
      },
    ],
  },
  {
    id: "pacific-coffee",
    name: "Pacific Coffee",
    kind: "cafe",
    cuisine: ["Cafe", "Light bites"],
    priceRange: "$$",
    building: "Academic Concourse",
    locationNote: "A common between-class coffee stop.",
    hours: {
      mon: "08:00–18:00",
      tue: "08:00–18:00",
      wed: "08:00–18:00",
      thu: "08:00–18:00",
      fri: "08:00–18:00",
      sat: "09:00–15:00",
      sun: null,
    },
    estimatedWaitMinutes: 6,
    rating: 4.2,
    reviewCount: 96,
    summary: "Coffee and light food when a full canteen meal is too much.",
    menu: [
      {
        category: "Drinks",
        items: [
          { id: "pc-latte", name: "Latte", priceHkd: 32, available: true },
        ],
      },
      {
        category: "Light Bites",
        items: [
          { id: "pc-croissant", name: "Butter croissant", priceHkd: 22, available: true },
        ],
      },
    ],
  },
  {
    id: "ebeneezers",
    name: "Ebeneezer's",
    kind: "cafe",
    cuisine: ["Cafe", "Western", "Sandwiches"],
    priceRange: "$$",
    building: "Academic Building",
    locationNote: "Sit-down cafe for a slower lunch than the canteen queues.",
    hours: {
      mon: "08:00–21:00",
      tue: "08:00–21:00",
      wed: "08:00–21:00",
      thu: "08:00–21:00",
      fri: "08:00–21:00",
      sat: "09:00–18:00",
      sun: null,
    },
    estimatedWaitMinutes: 10,
    rating: 4.0,
    reviewCount: 128,
    summary: "Western cafe meals and drinks; quieter than LG1 at peak.",
    menu: [
      {
        category: "Sandwiches",
        items: [
          { id: "eb-club", name: "Club sandwich", priceHkd: 58, tags: ["popular"], available: true },
        ],
      },
      {
        category: "Drinks",
        items: [
          { id: "eb-iced-tea", name: "Iced lemon tea", priceHkd: 24, available: true },
        ],
      },
    ],
  },
  {
    id: "passione",
    name: "Passione",
    kind: "restaurant",
    cuisine: ["Italian", "Western"],
    priceRange: "$$$",
    building: "University Center",
    locationNote:
      "Italian restaurant when you want a sit-down meal, not a stall.",
    hours: {
      mon: "11:30–21:30",
      tue: "11:30–21:30",
      wed: "11:30–21:30",
      thu: "11:30–21:30",
      fri: "11:30–21:30",
      sat: "11:30–21:30",
      sun: "11:30–21:00",
    },
    estimatedWaitMinutes: 15,
    rating: 4.3,
    reviewCount: 87,
    summary: "Pasta and pizza; slower and pricier than campus canteens.",
    menu: [
      {
        category: "Mains",
        items: [
          { id: "pa-carbonara", name: "Spaghetti carbonara", priceHkd: 88, tags: ["popular"], available: true },
          { id: "pa-margherita", name: "Margherita pizza", priceHkd: 98, available: true },
        ],
      },
    ],
  },
  {
    id: "joa",
    name: "JoA",
    kind: "restaurant",
    cuisine: ["Asian", "Chinese"],
    priceRange: "$$",
    building: "Academic Building",
    locationNote: "Campus restaurant for a plated Asian meal between classes.",
    hours: {
      mon: "11:00–21:00",
      tue: "11:00–21:00",
      wed: "11:00–21:00",
      thu: "11:00–21:00",
      fri: "11:00–21:00",
      sat: "11:00–18:00",
      sun: null,
    },
    estimatedWaitMinutes: 14,
    rating: 4.1,
    reviewCount: 73,
    summary: "Asian restaurant option when canteen stalls feel too rushed.",
    menu: [
      {
        category: "Sets",
        items: [
          { id: "joa-set", name: "Lunch set", priceHkd: 68, tags: ["set"], available: true },
        ],
      },
    ],
  },
  {
    id: "lg7-canteen",
    name: "LG7 Canteen",
    kind: "canteen",
    cuisine: ["Hong Kong", "Chinese", "Asian mixed"],
    priceRange: "$",
    building: "Academic Building, LG7",
    locationNote:
      "Lower-level canteen; often an alternative when LG1 is packed.",
    hours: {
      mon: "07:30–21:00",
      tue: "07:30–21:00",
      wed: "07:30–21:00",
      thu: "07:30–21:00",
      fri: "07:30–21:00",
      sat: "08:00–18:00",
      sun: null,
    },
    estimatedWaitMinutes: 11,
    rating: 3.7,
    reviewCount: 192,
    summary:
      "Another academic-building canteen with mixed stalls and student prices.",
    menu: [
      {
        category: "Rice & Noodles",
        items: [
          { id: "lg7-fried-rice", name: "Fried rice", priceHkd: 35, tags: ["popular"], available: true },
        ],
      },
    ],
  },
  {
    id: "white-space",
    name: "White Space",
    kind: "cafe",
    cuisine: ["Cafe", "Light bites"],
    priceRange: "$$",
    building: "Academic Building",
    locationNote: "Cafe stop for coffee and a light bite without a full meal.",
    hours: {
      mon: "08:30–18:00",
      tue: "08:30–18:00",
      wed: "08:30–18:00",
      thu: "08:30–18:00",
      fri: "08:30–18:00",
      sat: "09:00–15:00",
      sun: null,
    },
    estimatedWaitMinutes: 7,
    rating: 4.0,
    reviewCount: 54,
    summary: "Smaller cafe than Pacific Coffee; useful between lectures.",
    menu: [
      {
        category: "Drinks",
        items: [
          { id: "ws-americano", name: "Americano", priceHkd: 28, available: true },
        ],
      },
    ],
  },
  {
    id: "unibistro",
    name: "UniBistro",
    kind: "restaurant",
    cuisine: ["Western", "Asian mixed"],
    priceRange: "$$",
    building: "University Center",
    locationNote: "University Center restaurant; a step up from canteen trays.",
    hours: {
      mon: "11:00–21:00",
      tue: "11:00–21:00",
      wed: "11:00–21:00",
      thu: "11:00–21:00",
      fri: "11:00–21:00",
      sat: "11:00–20:00",
      sun: "11:00–20:00",
    },
    estimatedWaitMinutes: 16,
    rating: 3.9,
    reviewCount: 110,
    summary: "Campus bistro meals when you have more than twenty minutes.",
    menu: [
      {
        category: "Mains",
        items: [
          { id: "ub-pasta", name: "Daily pasta", priceHkd: 72, available: true },
        ],
      },
    ],
  },
  {
    id: "american-diner",
    name: "American Diner",
    kind: "restaurant",
    cuisine: ["Western", "American"],
    priceRange: "$$",
    building: "University Center",
    locationNote: "Burgers and diner plates; popular for a longer lunch.",
    hours: {
      mon: "11:00–21:00",
      tue: "11:00–21:00",
      wed: "11:00–21:00",
      thu: "11:00–21:00",
      fri: "11:00–21:00",
      sat: "11:00–21:00",
      sun: "11:00–20:00",
    },
    estimatedWaitMinutes: 18,
    rating: 4.1,
    reviewCount: 142,
    summary: "American diner food; expect a wait at weekday lunch.",
    menu: [
      {
        category: "Mains",
        items: [
          { id: "ad-burger", name: "Cheeseburger", priceHkd: 68, tags: ["popular"], available: true },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: "ad-fries", name: "Diner fries", priceHkd: 22, available: true },
        ],
      },
    ],
  },
];

export const sampleReviews: Review[] = [
  {
    id: "r1",
    venueId: "lg1-canteen",
    author: "Year 2, SENG",
    rating: 4,
    comment:
      "Fast on off-peak hours. Avoid 12:15–13:00 if you have a 13:30 class.",
    createdAt: "2026-09-12",
  },
  {
    id: "r2",
    venueId: "pacific-coffee",
    author: "Year 3, SBM",
    rating: 5,
    comment: "Reliable between lectures. Seats fill up after 10:30.",
    createdAt: "2026-09-10",
  },
  {
    id: "r3",
    venueId: "mcdonalds-concourse",
    author: "Year 1, ELEC",
    rating: 3,
    comment: "Fine as a backup when everything else has a long queue.",
    createdAt: "2026-09-08",
  },
  {
    id: "r4",
    venueId: "ebeneezers",
    author: "Year 4, BBA",
    rating: 4,
    comment: "Good for a slower lunch meeting, less chaotic than LG1.",
    createdAt: "2026-09-15",
  },
  {
    id: "r5",
    venueId: "passione",
    author: "Year 3, CPEG",
    rating: 5,
    comment: "Worth it for a birthday dinner on campus. Book ahead on weekends.",
    createdAt: "2026-09-18",
  },
  {
    id: "r6",
    venueId: "joa",
    author: "Year 2, LIFS",
    rating: 4,
    comment: "Lunch set is good value and comes out quickly.",
    createdAt: "2026-09-14",
  },
  {
    id: "r7",
    venueId: "lg7-canteen",
    author: "Year 1, SENG",
    rating: 3,
    comment: "Quieter than LG1 most days, same stalls roughly.",
    createdAt: "2026-09-11",
  },
  {
    id: "r8",
    venueId: "white-space",
    author: "Year 2, SBM",
    rating: 4,
    comment: "Small but rarely full, good for a quick coffee between classes.",
    createdAt: "2026-09-09",
  },
  {
    id: "r9",
    venueId: "unibistro",
    author: "Year 4, CIVL",
    rating: 4,
    comment: "Solid option when canteens are packed and you have time to sit.",
    createdAt: "2026-09-16",
  },
  {
    id: "r10",
    venueId: "american-diner",
    author: "Year 3, ELEC",
    rating: 4,
    comment: "Burgers are decent, expect to wait during weekday lunch rush.",
    createdAt: "2026-09-17",
  },
];

export function getVenueById(id: string) {
  return sampleVenues.find((venue) => venue.id === id);
}

export function getReviewsForVenue(venueId: string) {
  return sampleReviews.filter((review) => review.venueId === venueId);
}

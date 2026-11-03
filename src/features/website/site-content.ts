export const desktopPages = ["Home", "Menu", "Catering", "Our Story"] as const;
export const footerPages = ["Home", "Menu", "Catering", "Our Story"] as const;
export const mobilePages = [
  ...desktopPages,
  "Community",
] as const;
export const pageHref = {
  Home: "/",
  Menu: "/menu",
  Catering: "/catering",
  "Our Story": "/our-story",
} as const;
export function hrefFor(label: string): string | null {
  return label in pageHref ? pageHref[label as keyof typeof pageHref] : null;
}

export const externalLinks = {
  orderUrl: "https://pearlislandcatering.square.site/",
  giftCardsUrl: "https://squareup.com/gift/3BP51BNWY0XRK/order",
  applyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfwcketTYeQHcyBa7snQGlNo20yE17iryFToIb88DHf0rxILA/viewform?usp=send_form",
  instagramUrl: "https://www.instagram.com/pearlislandcatering",
  facebookUrl: "https://www.facebook.com/pearlislandcatering/",
  cateringUrl: "https://api.getspoonfed.com/1438/pearl-island/",
  specialEventsMenuUrl: "https://pearlislandcatering.com/s/2026-Pearl-Island-Catering-Menu-WOP_1_8_2026-Google-Docs-fjbj.pdf",
} as const;

export const inactiveDescriptionId = "inactive-destinations-description";
export const newsletterDescriptionId = "newsletter-unavailable-description";
export const externalLinkDescriptionId = "external-link-new-tab-description";

export const footerContent = {
  locationName: "B.E.A.C.O.N. Shared Kitchen",
  addressLine1: "221 Carlton Rd Ste 1",
  addressLine2: "Charlottesville, VA 22902",
  phone: "(434) 466-0092",
  email: "info@pearlislandcatering.com",
} as const;

export type Review = { quote: string; name: string };
// Verbatim five-star Google reviews from Diego's review workbook (Nov 2026).
export const reviews: Review[] = [
  { quote: "Clean fresh foods. All of it. Delicious.", name: "621 Studios" },
  { quote: "Some of the best food I’ve ever had. The flavors are unreal, and they all work so well together. 1000000/10", name: "Mary-Peyton Crook" },
  { quote: "Fantastic food and friendly service!", name: "Bo" },
  { quote: "Great staff! Amazingly delicious food!", name: "Daniel Franco" },
  { quote: "Vegan Jerk meal was absolutely amazing! I wish I could eat here everyday!!!!!!", name: "Queena (Queena Beana)" },
  { quote: "Wow, the food was delicious! It was truly such a treat. The staff were super friendly. Huge portions and unique flavors. We will be back!", name: "Abby MacKnight" },
  { quote: "So delicious! Love the jerk tofu and sous-shu. Generous portion sizes too!", name: "Sal Bonsall" },
  { quote: "A true 5 star cafe! Tofu curry and sides are exceptional. Give this local business a try!", name: "Quinn Morrow" },
  { quote: "This place is amazing! The food is delicious, the portions are huge, and I cannot wait to go back and try everything else.", name: "Sam Giannangeli" },
  { quote: "The food is flavorful and filling, and the staff is very friendly!", name: "Anna Taylor" },
  { quote: "The best! Pearl Island put together a delicious meal for 25 people and everyone was happy! Everything was fresh and flavorful. So grateful to have them in this community!", name: "Rosemary Miller" },
  { quote: "The team at Pearl Island did an amazing job for our gathering at a local winery. The food was delicious. The service was amazing, and they made the ordering process a breeze.", name: "Angie Batten" },
];

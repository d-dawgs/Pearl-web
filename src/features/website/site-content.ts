export const desktopPages = ["Home", "Menu", "Catering", "Our Story"] as const;
export const footerPages = ["Home", "Menu", "Catering", "Our Story"] as const;
export const mobilePages = [
  ...desktopPages,
  "Community",
] as const;

export const externalLinks = {
  orderUrl: "https://pearlislandcatering.square.site/",
  giftCardsUrl: "https://squareup.com/gift/3BP51BNWY0XRK/order",
  applyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfwcketTYeQHcyBa7snQGlNo20yE17iryFToIb88DHf0rxILA/viewform?usp=send_form",
  instagramUrl: "https://www.instagram.com/pearlislandcatering",
  facebookUrl: "https://www.facebook.com/pearlislandcatering/",
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

export const desktopPages = ["Home", "Menu", "Catering", "Our Story"] as const;
export const mobilePages = [
  ...desktopPages,
  "Pearl Island 2 Go",
  "Community",
] as const;

export const inactiveDescriptionId = "inactive-destinations-description";
export const newsletterDescriptionId = "newsletter-unavailable-description";

export const footerContent = {
  locationName: "B.E.A.C.O.N. Shared Kitchen",
  addressLine1: "221 Carlton Rd Ste 1",
  addressLine2: "Charlottesville, VA 22902",
  phone: "(434) 466-0092",
  email: "info@pearlislandcatering.com",
} as const;

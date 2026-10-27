export const desktopPages = ["Home", "Menu", "Catering", "Our Story"] as const;
export const mobilePages = [
  ...desktopPages,
  "Pearl Island 2 Go",
  "Community",
] as const;

export const inactiveDescriptionId = "inactive-destinations-description";
export const newsletterDescriptionId = "newsletter-unavailable-description";

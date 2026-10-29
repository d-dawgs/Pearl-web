import { externalLinks } from "@/features/website/site-content";

export type MenuEntry = {
  id: string;
  name: string;
  price: string;
  image?: string;
  description: string;
  naturalWidth?: number;
  naturalHeight?: number;
  shape?: MenuImageShape;
  combo?: boolean;
  surcharge?: number;
};

export type MenuImageShape = "PLATTER" | "SIDE_TRAY" | "CUP" | "TALL" | "WIDE_TRAY";

export const menuCopy = {
  hero: { eyebrow: "CARIBBEAN FLAVORS · THE MENU", headline: "Island Flavor.", subtitle: "A little heat, a little tang, and a whole lot of flavor." },
  proteinHeading: "Protein Selections",
  proteinIntro: "Nine protein choices available with the platter menu.",
  platterHeading: "Platter Options",
  platterIntro: "All platters include rice with pigeon peas, kale salad, fried plantains, aioli and pikliz.",
  platterDisclaimer: "Base prices shown. Certain proteins and drink choices cost extra. Final selections and totals appear in Square.",
  finalSelections: "Final selections and totals appear in Square.",
  comboHeading: "Make it a combo",
  comboDescription: "Includes a drink",
  comboPrice: "from +$2",
  categoryHeading: {
    platters: "Protein Selections", sides: "Sides / A La Carte", "family-style": "Family Style", salads: "Salads", drinks: "Signature Drinks & Sodas", "pearl-island-products": "Pearl Island Products", "wing-wednesdays": "PI x MK Halal Wings", oxtail: "Oxtail",
  } satisfies Record<MenuCategoryId, string>,
  categoryIntro: {
    platters: "Nine protein choices available with the platter menu.",
    sides: "Sides start at $2.00. Each side is a 6 oz serving. Prices shown are added to the $2.00 base.",
    "family-style": "Serves about 4.",
    salads: "Priced as listed.",
    drinks: "Drinks start at $2.00. Prices shown are added to the $2.00 base.",
    "pearl-island-products": "Available in Square.",
    "wing-wednesdays": "Available Wednesdays.",
    oxtail: "Available in Square.",
  } satisfies Record<MenuCategoryId, string>,
  sideGroups: { cafe: "Cafe Sides", addOns: "Add-ons" },
  wingEyebrow: "WING WEDNESDAYS",
  wingTitle: "PI x MK Halal Wings",
  wingIntro: "A collaboration between Pearl Island and Mint Kitchen, combining Caribbean and South Indian flavors. Oven-roasted chicken wings and tempura-fried cauliflower wings.",
  wingServingHeading: "Serving Options",
  wingServingIntro: "Both wing styles are available as a platter or basket.",
  wingSauceHeading: "Sauce Options",
  wingSauces: "Classic (no sauce) · Curry · Jerk · Mango Pineapple · Tamarind · Jerk BBQ",
  wingOrderingNote: "Available Wednesdays. Selection and customization take place in Square.",
} as const;

const dimensions: Record<string, [number, number]> = {
  "chickpea-stew": [1015, 1165],
  "creole-beans": [1028, 1200],
  "curry-chicken": [1058, 1163],
  "curry-tofu": [1035, 1116],
  "drink-blue-ridge-bucha": [541, 1063],
  "drink-hibiscus": [1091, 1062],
  "drink-koto-ginger-beer-passion": [601, 1110],
  "drink-koto-ginger-beer": [532, 1018],
  "drink-limeade": [1090, 1080],
  "drink-lychee-lemonade": [995, 980],
  "drink-malta": [419, 1132],
  "drink-pearl-island-water": [473, 1189],
  "drink-tamarind": [1035, 1011],
  "drink-ting": [973, 960],
  "drink-tropical-lemonade": [1038, 1016],
  "jerk-chicken": [1060, 1165],
  "jerk-tofu": [1042, 1177],
  "product-aioli-bottle": [423, 1061],
  "product-aioli-vegan-bottle": [402, 1061],
  "product-pikliz-12oz": [705, 1131],
  "product-pikliz-jar": [632, 1146],
  "product-shallot-vinaigrette": [351, 1189],
  "roasted-pork": [1043, 1133],
  "salad-kale": [1200, 774],
  "side-creole-beans": [816, 766],
  "side-curry-chicken": [964, 665],
  "side-curry-tofu": [800, 714],
  "side-extra-aioli-vegan": [568, 566],
  "side-extra-aioli": [983, 957],
  "side-extra-pikliz": [597, 581],
  "side-fried-plantains-3": [630, 719],
  "side-jerk-chicken": [1072, 714],
  "side-jerk-tofu": [890, 746],
  "side-kale-salad": [770, 733],
  "side-plantain-platter-6": [980, 736],
  "side-pulled-pork": [912, 791],
  "side-rice-pigeon-peas": [838, 752],
  "side-sous-poulet": [790, 717],
  "side-sous-shu": [922, 822],
  "sous-poulet": [1022, 1090],
  "sous-shu": [1084, 1200],
  "wings-curry": [1169, 732],
  "wings-jerk": [1172, 767],
};

const imageShapes: Record<string, MenuImageShape> = {
  "jerk-chicken": "PLATTER", "roasted-pork": "PLATTER", "curry-chicken": "PLATTER", "sous-poulet": "PLATTER", "curry-tofu": "PLATTER", "jerk-tofu": "PLATTER", "creole-beans": "PLATTER", "sous-shu": "PLATTER", "chickpea-stew": "PLATTER",
  "side-curry-chicken": "SIDE_TRAY", "side-jerk-chicken": "SIDE_TRAY", "side-pulled-pork": "SIDE_TRAY", "side-sous-poulet": "SIDE_TRAY", "side-creole-beans": "SIDE_TRAY", "side-curry-tofu": "SIDE_TRAY", "side-jerk-tofu": "SIDE_TRAY", "side-sous-shu": "SIDE_TRAY", "side-rice-pigeon-peas": "SIDE_TRAY", "side-plantain-platter-6": "SIDE_TRAY", "side-kale-salad": "SIDE_TRAY", "side-fried-plantains-3": "SIDE_TRAY",
  "side-extra-aioli": "CUP", "side-extra-aioli-vegan": "CUP", "side-extra-pikliz": "CUP", "drink-tropical-lemonade": "CUP", "drink-limeade": "CUP", "drink-hibiscus": "CUP", "drink-tamarind": "CUP", "drink-lychee-lemonade": "CUP", "drink-ting": "CUP",
  "drink-malta": "TALL", "drink-koto-ginger-beer": "TALL", "drink-koto-ginger-beer-passion": "TALL", "drink-blue-ridge-bucha": "TALL", "drink-pearl-island-water": "TALL", "product-aioli-bottle": "TALL", "product-aioli-vegan-bottle": "TALL", "product-shallot-vinaigrette": "TALL", "product-pikliz-jar": "TALL", "product-pikliz-12oz": "TALL",
  "salad-kale": "WIDE_TRAY", "wings-jerk": "WIDE_TRAY", "wings-curry": "WIDE_TRAY",
};

const entry = (id: string, name: string, price: string, description: string, photo?: string): MenuEntry => {
  const size = photo ? dimensions[photo] : undefined;
  return {
    id, name, price, description,
    image: photo ? `/images/menu/${photo}.png` : undefined,
    naturalWidth: size?.[0], naturalHeight: size?.[1],
    shape: photo ? imageShapes[photo] : undefined,
  };
};
const proteinDescription = "Served as a platter with rice with pigeon peas, kale salad, fried plantains, aioli and pikliz.";
const protein = (id: string, name: string, surcharge: number): MenuEntry => ({ ...entry(id, name, surcharge === 0 ? "No extra charge" : `+$${surcharge.toFixed(2)}`, proteinDescription, id), surcharge });

export const menuData = {
  orderUrl: externalLinks.orderUrl,
  proteins: [protein("jerk-chicken", "Jerk Chicken", 0), protein("roasted-pork", "Roasted Pork", 1.25), protein("curry-chicken", "Curry Chicken", 0), protein("sous-poulet", "Sous Poulet", 0), protein("curry-tofu", "Curry Tofu", .25), protein("jerk-tofu", "Jerk Tofu", .25), protein("creole-beans", "Creole Beans", .25), protein("sous-shu", "Sous Shu", 1.25), protein("chickpea-stew", "Chickpea Stew", 1.5)],
  wingPhotos: [entry("wings-jerk-feature", "Chicken Wings", "", "Oven-roasted, seasoned with Caribbean and South Indian flavors.", "wings-jerk"), entry("wings-curry-feature", "Vegan Wings", "", "Tempura-fried cauliflower.", "wings-curry")],
  platters: [
    { id: "half-platter", name: "Half Platter", description: "1 protein · ⅔ portion", price: "$12.00" },
    { id: "platter", name: "Platter", description: "1 protein · regular portion", price: "$14.75" },
    { id: "half-and-half-platter", name: "Half & Half Platter", description: "2 proteins", price: "$19.50" },
    { id: "trifecta-platter", name: "Trifecta Platter", description: "3 proteins", price: "$24.25" },
  ],
  categories: [
    { id: "platters", label: "Platters" }, { id: "sides", label: "Sides" }, { id: "family-style", label: "Family Style" }, { id: "salads", label: "Salads" }, { id: "drinks", label: "Drinks" }, { id: "pearl-island-products", label: "Pearl Island Products" }, { id: "wing-wednesdays", label: "Wing Wednesdays" }, { id: "oxtail", label: "Oxtail" },
  ] as const,
  sides: [
    entry("side-curry-chicken", "Curry Chicken", "+$3.00", "6 oz side serving.", "side-curry-chicken"), entry("side-jerk-chicken", "Jerk Chicken", "+$3.00", "6 oz side serving.", "side-jerk-chicken"), entry("side-pulled-pork", "Pulled Pork", "+$4.50", "6 oz side serving.", "side-pulled-pork"), entry("side-sous-poulet", "Sous Poulet", "+$3.00", "6 oz side serving.", "side-sous-poulet"), entry("side-creole-beans", "Creole Beans", "+$3.25", "6 oz side serving.", "side-creole-beans"), entry("side-curry-tofu", "Curry Tofu", "+$3.25", "6 oz side serving.", "side-curry-tofu"), entry("side-jerk-tofu", "Jerk Tofu", "+$3.25", "6 oz side serving.", "side-jerk-tofu"), entry("side-sous-shu", "Sous Shu", "+$4.50", "6 oz side serving.", "side-sous-shu"), entry("side-rice-pigeon-peas", "Rice w/Pigeon Peas", "+$0.85", "6 oz side serving.", "side-rice-pigeon-peas"), entry("side-fried-plantains-3", "Fried Plantains (3)", "+$0.25", "6 oz side serving.", "side-fried-plantains-3"), entry("side-plantain-platter-6", "Fried Plantain Platter (6)", "+$2.50", "6 oz side serving.", "side-plantain-platter-6"), entry("side-kale-salad", "Kale Salad", "+$1.25", "6 oz side serving.", "side-kale-salad"),
    entry("side-extra-aioli", "Extra Aioli", "$0.50", "Add-on.", "side-extra-aioli"), entry("side-extra-aioli-vegan", "Extra Aioli (Vegan)", "$0.50", "Add-on.", "side-extra-aioli-vegan"), entry("side-extra-pikliz", "Extra Pikliz", "$0.75", "Add-on.", "side-extra-pikliz"),
  ],
  salads: [entry("salad-kale", "Kale Salad", "$10.00", "Pearl Island Kale Salad.", "salad-kale")],
  drinks: [
    entry("drink-tropical-lemonade", "Tropical Lemonade", "+$2.00", "Tropical Lemonade · +$2.00.", "drink-tropical-lemonade"), entry("drink-limeade", "Limeade", "+$1.00", "Limeade · +$1.00.", "drink-limeade"), entry("drink-hibiscus", "Hibiscus Drink", "+$1.00", "Hibiscus Drink · +$1.00.", "drink-hibiscus"), entry("drink-tamarind", "Tamarind Drink", "+$1.00", "Tamarind Drink · +$1.00.", "drink-tamarind"), entry("drink-lychee-lemonade", "Lychee Lemonade", "+$2.00", "Lychee Lemonade · +$2.00.", "drink-lychee-lemonade"), entry("drink-ting", "Ting – Sparkling Grapefruit", "+$0.50", "Ting – Sparkling Grapefruit · +$0.50.", "drink-ting"), entry("drink-non-alcoholic", "Non-Alcoholic", "+$0.25", "Non-Alcoholic · +$0.25."), entry("drink-malta", "Malta – Malt Beverage", "12 oz +$1.50 · 7 oz no extra charge", "Malta – Malt Beverage: 12 oz +$1.50, 7 oz no extra charge.", "drink-malta"), entry("drink-koto-ginger-beer", "KOTO Ginger Beer", "+$1.00", "Traditional, Passion Fruit, Tamarind, Sorrel.", "drink-koto-ginger-beer"), entry("drink-blue-ridge-bucha", "Blue Ridge Bucha", "+$2.00", "Original Ginger, Bluegrass, Elderflower Sunrise, Black Raspberry, Jasmine Grape, Wild Pear.", "drink-blue-ridge-bucha"), entry("drink-pearl-island-water", "Pearl Island Water", "No extra charge · aluminum bottle +$0.50", "Pearl Island Water: aluminum bottle +$0.50.", "drink-pearl-island-water"), entry("drink-cafe-sin-leche", "Cafe sin Leche – Dairy-Free Coffee", "+$2.00", "Cafe sin Leche – Dairy-Free Coffee · +$2.00."),
  ],
  products: [
    entry("product-shallot-vinaigrette", "(16oz) Bottle PI Shallot Vinaigrette", "$8.00", "Pearl Island Shallot Vinaigrette.", "product-shallot-vinaigrette"), entry("product-pikliz-12oz", "12oz Pikliz – Caribbean Coleslaw", "$8.00", "Pikliz is a Caribbean slaw (cabbage, carrots and onions) brined in a spicy habanero citrus brine.", "product-pikliz-12oz"), entry("product-pikliz-jar", "Pikliz Jar (12oz)", "$7.00", "Pikliz is a spicy pickled coleslaw that is a signature Haitian dipikliz is prepared with fresh ingredients and naturally preserved in a citrus brine. A versatile condiment that brings a taste of the Caribbean.", "product-pikliz-jar"), entry("product-pearl-island-pikliz", "Pearl Island Pikliz", "$8.00–$10.00", "Pikliz is a Caribbean slaw (cabbage, carrots and onions) brined in a spicy habanero citrus brine.", "product-pikliz-12oz"), entry("product-aioli", "(16oz) Bottle Aioli", "$8.00", "Garlic-infused lemon aioli.", "product-aioli-bottle"), entry("product-aioli-vegan", "(16oz) Bottle Aioli (Vegan)", "$8.00", "Garlic-infused vegan lemon aioli.", "product-aioli-vegan-bottle"),
  ],
  wingServings: [
    { name: "Wing Platter", price: "$18.00", pieces: "6 pieces", description: "Rice with pigeon peas, kale salad, fried plantains, aioli and pikliz." },
    { name: "Wing Basket", price: "$16.00", pieces: "8 pieces", description: "Fried plantains and pikliz." },
  ],
  familyStyle: { name: "Family Style", detail: "Serves about 4", price: "Priced by selection" },
  oxtail: { name: "Oxtail", detail: "Separate from the platter proteins", price: "See Square" },
} as const;

export type MenuCategoryId = (typeof menuData.categories)[number]["id"];

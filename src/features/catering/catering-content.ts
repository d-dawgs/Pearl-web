// Replace this single value when Pearl Island supplies its final catering photograph.
export const cateringPhotoSrc: string | null = null;

export const serviceStyles = [
  { title: "Buffet", description: "Set out for guests to serve themselves" },
  { title: "Family style", description: "Shared platters at each table" },
  { title: "Plated", description: "Served to each guest" },
] as const;

export const questions = [
  {
    label: "THE FOOD",
    items: [
      { question: "What events and service styles do you cater?", answer: "Weddings, corporate lunches, private events and family gatherings, served buffet, family style or plated." },
      { question: "Can I see a menu, and can it be customized?", answer: "Yes. The Special Events Menu (PDF) shows the range of dishes. Our menus are inspired by Caribbean comfort food and customized for your event." },
    ],
  },
  {
    label: "BOOKING",
    items: [
      { question: "How is catering priced?", answer: "We offer à la carte and bulk pricing for any event size, and will do our best to work with your budget." },
      { question: "How do I book?", answer: "Use Book catering to order through Spoonfed. For a custom quote, email info@pearlislandcatering.com." },
      { question: "How far ahead should I book?", answer: "Answer to come from Pearl Island.", pending: true },
    ],
  },
  {
    label: "EVENT DAY",
    items: [
      { question: "Do you help plan the event?", answer: "Yes. We take a hands-on approach to planning and take care of every detail, so you can sit back, relax and celebrate." },
      { question: "Do you deliver and set up?", answer: "Answer to come from Pearl Island.", pending: true },
    ],
  },
] as const;

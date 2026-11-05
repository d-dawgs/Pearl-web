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
      { question: "Question 1", answer: "question and answer to the question needs to be answered by owner" },
      { question: "Question 2", answer: "question and answer to the question needs to be answered by owner" },
      { question: "Question 3", answer: "question and answer to the question needs to be answered by owner" },
    ],
  },
  {
    label: "BOOKING",
    items: [
      { question: "Question 1", answer: "question and answer to the question needs to be answered by owner" },
      { question: "Question 2", answer: "question and answer to the question needs to be answered by owner" },
      { question: "Question 3", answer: "question and answer to the question needs to be answered by owner" },
    ],
  },
  {
    label: "EVENT DAY",
    items: [
      { question: "Question 1", answer: "question and answer to the question needs to be answered by owner" },
      { question: "Question 2", answer: "question and answer to the question needs to be answered by owner" },
      { question: "Question 3", answer: "question and answer to the question needs to be answered by owner" },
    ],
  },
] as const;

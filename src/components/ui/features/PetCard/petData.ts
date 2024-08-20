import { IPetType } from "../../../../types/index";

export const petData: IPetType[] = [
  {
    id: 1,
    name: "Buddy",
    imageUrl: "https://i.ibb.co/7QpKsCX/dog.jpg",
    shortDescription: "Friendly and playful dog.",
    fullDescription:
      "Buddy is a very friendly and playful dog who loves to play with kids and enjoys long walks in the park. He is loyal and well-trained.",
    size: "Medium",
    color: "Brown",
  },
  {
    id: 2,
    name: "Whiskers",
    imageUrl: "https://i.ibb.co/PQxg5Cz/cat-food.png",
    shortDescription: "Calm and affectionate cat.",
    fullDescription:
      "Whiskers is a calm and affectionate cat who loves to cuddle and enjoys a quiet environment. She is gentle and perfect for indoor living.",
    size: "Small",
    color: "Gray",
  },
  // Add more pets as needed
];

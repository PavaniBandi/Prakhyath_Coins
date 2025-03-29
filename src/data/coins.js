const images = import.meta.glob("/src/assets/*.jpg", { eager: true });

const coins = [
  {
    id: 1,
    name: "Mewar Princely State Rupee vs1985",
    year: "1928 AD",
    category: "Indian Princely State",
    description: "Thick letters Type (wrong labelled as Thin letters)Maharaja Fateh singh.NGC MS 64 - A beautiful Specimen",
    image: "/src//assets/Coin1.jpg",
  },
  {
    id: 2,
    name: "Mewar Princely State Rupee (Thin letters Type) vs1985",
    year: "1928 AD.",
    category: "Indian Princely State",
    description: "Thin letters Type ”Maharaja Fateh singh”.NGC MS 65 - A beautiful Specimen",
    image: "/src/assets/Coin2.jpg",
  },
];

export default coins;

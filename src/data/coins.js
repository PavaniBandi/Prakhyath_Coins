const coins = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Coin ${i + 1}`,
    year: 1800 + (i % 100),
    category: i % 3 === 0 ? "Gold" : i % 3 === 1 ? "Silver" : "Rare",
    image: `/coin${(i % 3) + 1}.jpg`,
  }));
  
  export default coins;
  
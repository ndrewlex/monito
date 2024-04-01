export const CategoriesData = Array.from({ length: 8 }).map((_, index) => {
  return {
    image: `/dog/image-${index + 1}.png`,
    title: "MO231 - Pomeranian White",
    genre: "Male",
    age: "02 Months",
    price: 6900000,
  };
});

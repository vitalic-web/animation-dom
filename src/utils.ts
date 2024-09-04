const getImgUrl = (imgName: string): string => {
  return new URL(`./assets/pictures/${imgName}`, import.meta.url).href;
};

const generateUniqueRandomNumbers = (count: number, max: number): number[] => {
  const numbers = new Set<number>();
  while (numbers.size < count) {
    const randomNum = Math.floor(Math.random() * max) + 1;
    numbers.add(randomNum);
  }
  return Array.from(numbers);
};

export {
  getImgUrl,
  generateUniqueRandomNumbers,
}
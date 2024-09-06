const getImgUrl = (imgName: string): string => {
  return new URL(`./assets/pictures/${imgName}`, import.meta.url).href;
};

const getRandomNumber = (maxNums: number): number => Math.floor(Math.random() * maxNums) + 1;

const generateUniqueRandomNumbers = (count: number, max: number): number[] => {
  const numbers = new Set<number>();
  while (numbers.size < count) {
    const randomNum = getRandomNumber(max);
    numbers.add(randomNum);
  }
  return Array.from(numbers);
};

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export {
  getImgUrl,
  getRandomNumber,
  generateUniqueRandomNumbers,
  formatTime,
}
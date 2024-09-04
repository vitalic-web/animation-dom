const getImgUrl = (imgName: string): string => {
  return new URL(`./assets/pictures/${imgName}`, import.meta.url).href;
};

export {
  getImgUrl,
}
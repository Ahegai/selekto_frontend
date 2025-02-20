export const getUrl = (url: string): string => {
  return new URL(url, import.meta.url).href;
};

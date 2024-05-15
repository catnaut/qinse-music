import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";
import { cache } from "react";
/**
 * @param src 格式 ./public/xxx.jpg
 * @returns dataUrl `data:image/png;base64,xxxxxx`
 */
export const getLocalPlaceholder = async (src: string) => {
  const file = await fs.readFile(src);
  const { base64 } = await getPlaiceholder(file, { size: 12 });
  return base64;
};

/**
 * @param src 格式 https://xxx.com/xxx.jpg
 * @returns dataUrl `data:image/png;base64,xxxxxx`
 */
export const getRemotePlaceholder = cache(async (src: string) => {
  const response = await fetch(src);
  const buffer = await response.arrayBuffer();
  const { base64 } = await getPlaiceholder(Buffer.from(buffer), { size: 12 });
  return base64;
});

import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

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
export const getRemotePlaceholder = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );

  const { base64 } = await getPlaiceholder(buffer, { size: 12 });

  return base64;
};

/**
 * @param time 单位为秒
 */
export function toTime(time: number): string {
  // 确保时间为整数,秒数为两位数
  if (time < 0) {
    throw new Error("time must be positive");
  }
  const hour = Math.floor(time / 3600);
  const minute = Math.floor((time % 3600) / 60);
  const second = Math.floor(time % 60);
  return `
    ${hour ? hour : ""}${hour ? ":" : ""}
    ${minute}:${String(second).padStart(2, "0")}`;
}

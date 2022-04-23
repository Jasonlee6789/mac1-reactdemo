/**
 * @description 生成唯一随机数
 * @param range
 */
const randomId = () => Math.random().toString(36).substring(2) || "0";

export { randomId };

/**
 * 生成范围随机数
 * @Min 最小值
 * @Max 最大值
 */
// export function GetRandomNum(Min, Max): Number {
//   var Range = Max - Min;
//   var Rand = Math.random();
//   return Min + Math.round(Rand * Range);
// }

export default function add(...nums: number[]): number {
  return nums.reduce((acc, num) => acc + num, 0);
}

export function multiply (...nums: number[]): number {
  return nums.reduce((acc, num) => acc * num, 1);
}
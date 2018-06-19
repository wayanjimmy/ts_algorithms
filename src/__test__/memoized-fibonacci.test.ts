import { fibMemo } from "../memoized-fibonacci";

it("should return 3", () => {
  expect(fibMemo(4)).toBe(3);
});

it("should return 34", () => {
  expect(fibMemo(9)).toBe(34);
});

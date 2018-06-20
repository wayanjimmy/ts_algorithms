import { bubbleSort } from "../bubble-sort";

it("should returns [3, 4, 5, 7]", () => {
  expect(bubbleSort([5, 4, 3, 7])).toEqual([3, 4, 5, 7]);
});

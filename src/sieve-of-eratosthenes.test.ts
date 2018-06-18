import { sieveOfEratosThenes } from "./sieve-of-eratosthenes";

it("should returns [2, 3, 5, 7]", () => {
  expect(sieveOfEratosThenes(8)).toEqual([2, 3, 5, 7]);
});

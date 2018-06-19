import { sieveOfEratosThenes } from "../sieve-of-eratosthenes";

it("should returns [2, 3, 5, 7]", () => {
  expect(sieveOfEratosThenes(8)).toEqual([2, 3, 5, 7]);
});

it("should returns [2, 3, 5, 7, 11, 13, 17, 19]", () => {
  expect(sieveOfEratosThenes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
});

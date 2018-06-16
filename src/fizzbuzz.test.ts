import { fizzbuzz } from "./fizzbuzz";

it("should returns FizzBuzz", () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
});

it("should returns Fizz", () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});

it("should returns Buzz", () => {
  expect(fizzbuzz(5)).toBe("Buzz");
});

it("should returns 7", () => {
  expect(fizzbuzz(7)).toBe(7);
});

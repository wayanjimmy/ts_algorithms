import { test } from "https://deno.land/std@v0.7/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.7/testing/asserts.ts";
import { fizzBuzz } from "./fizz_buzz.ts";

test({
  name: "[fizz buzz] fizzBuzz of 15 should returns `FizzBuzz`",
  fn: () => assertEquals(fizzBuzz(15), "FizzBuzz")
});

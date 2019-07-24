import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { fizzBuzz } from "./fizz_buzz.ts";

test({
  name: "[fizz buzz] fizzBuzz of 15 should return `FizzBuzz`",
  fn: () => assertEquals(fizzBuzz(15), "FizzBuzz")
});

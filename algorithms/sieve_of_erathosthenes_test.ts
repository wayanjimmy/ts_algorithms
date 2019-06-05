import { test } from "https://deno.land/std@v0.7/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.7/testing/asserts.ts";
import { sieveOfEratosThenes } from "./sieve_of_eratosthenes.ts";

test({
  name: "[sieve of erathosthenes] should return `[2, 3, 5, 7]`",
  fn: () => assertEquals(sieveOfEratosThenes(8), [2, 3, 5, 7])
});

test({
  name: "[sieve of erathosthenes] should return `[2, 3, 5, 7, 11, 13, 17, 19]`",
  fn: () => assertEquals(sieveOfEratosThenes(20), [2, 3, 5, 7, 11, 13, 17, 19])
});

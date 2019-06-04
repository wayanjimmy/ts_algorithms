import { test } from "https://deno.land/std@v0.7/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.7/testing/asserts.ts";
import { fibMemo } from "./memoized_fibonacci.ts";

test({
  name: "[memoized fibonacci] should return `3`",
  fn: () => assertEquals(fibMemo(4), 3)
});

test({
  name: "[memoized fibonacci] should return `34`",
  fn: () => assertEquals(fibMemo(9), 34)
});

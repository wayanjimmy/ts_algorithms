import { test } from "https://deno.land/std@v0.7/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.7/testing/asserts.ts";
import { binarySearch } from "./binary_search.ts";

test({
  name: "[binary search] should return `true`",
  fn: () =>
    assertEquals(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56), true)
});

test({
  name: "[binary search] should return `false`",
  fn: () =>
    assertEquals(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 72), false)
});

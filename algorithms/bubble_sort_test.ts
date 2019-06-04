import { test } from "https://deno.land/std@v0.7/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.7/testing/asserts.ts";
import { bubbleSort } from "./bubble_sort.ts";

test({
  name: "[bubble sort] bubbleSort should return `[3, 4, 5, 7]`",
  fn: () => assertEquals(bubbleSort([5, 4, 3, 7]), [3, 4, 5, 7])
});

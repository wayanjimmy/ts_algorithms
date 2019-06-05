import { test } from "https://deno.land/std@v0.7/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.7/testing/asserts.ts";
import { reverseArrayInPlace } from "./reverse_array_in_place.ts";

test({
  name: "[reverse array in place] should return [0, 8, 7, 4, 5]",
  fn: () => assertEquals(reverseArrayInPlace([5, 4, 7, 8, 0]), [0, 8, 7, 4, 5])
});

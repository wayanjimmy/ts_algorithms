import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { binarySearch } from "./binary_search_logarithmic.ts";

test({
  name: "[binary search] should return `true`",
  fn: () =>
    assertEquals(
      binarySearch(
        [
          10,
          20,
          47,
          59,
          63,
          75,
          88,
          99,
          107,
          120,
          133,
          155,
          162,
          176,
          188,
          199,
          200,
          210,
          222
        ],
        47
      ),
      2
    )
});

test({
  name: "[binary search] should return `false`",
  fn: () => assertEquals(binarySearch([188, 199, 200, 210, 222], 175), -1)
});

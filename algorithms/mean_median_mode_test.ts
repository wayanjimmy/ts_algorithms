import { test } from "https://deno.land/std@v0.7/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.7/testing/asserts.ts";
import { meanMedianMode } from "./mean_median_mode.ts";

test({
  name:
    "[mean median mode] should return mean=5.166666666666667, median=4.5, mode=4",
  fn: () =>
    assertEquals(meanMedianMode([4, 5, 6, 9, 3, 4]), {
      mean: 5.166666666666667,
      median: 4.5,
      mode: [4]
    })
});

test({
  name: "[mean median mode] should return mean=2, median=2, mode=[]",
  fn: () =>
    assertEquals(meanMedianMode([2, 1, 3, 3, 2, 1]), {
      mean: 2,
      median: 2,
      mode: []
    })
});

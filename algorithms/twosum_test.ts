import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { twoSum } from "./twosum.ts";

test({
  name: "[twosum] should return `[[6,1], [3,4], [3,4]]`",
  fn: () =>
    assertEquals(twoSum([1, 6, 4, 5, 3, 3], 7), [[6, 1], [3, 4], [3, 4]])
});

test({
  name: "[twosum] should return `[[17,11], [-12,40]]`",
  fn: () =>
    assertEquals(twoSum([40, 11, 19, 17, -12], 28), [[17, 11], [-12, 40]])
});

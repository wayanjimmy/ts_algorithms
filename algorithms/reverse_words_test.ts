import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { reverseWords } from "./reverse_words.ts";

test({
  name: "[reverse words] should return `siht si a gnirts fo sdrow`",
  fn: () =>
    assertEquals(
      reverseWords("this is a string of words"),
      "siht si a gnirts fo sdrow"
    )
});

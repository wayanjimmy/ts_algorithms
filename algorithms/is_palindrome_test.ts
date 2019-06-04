import { test } from "https://deno.land/std@v0.7/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.7/testing/asserts.ts";
import { isPalindrome } from "./is_palindrome.ts";

test({
  name: "[is palindrome] should return `true`",
  fn: () => assertEquals(isPalindrome("Madam I'm Adam"), true)
});

test({
  name: "[is palindrome] should return `false`",
  fn: () => assertEquals(isPalindrome("coding typescript"), false)
});

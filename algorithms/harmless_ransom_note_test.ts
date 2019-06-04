import { test } from "https://deno.land/std@v0.7/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.7/testing/asserts.ts";
import { harmlessRansomNote } from "./harmless_ransom_note.ts";

test({
  name: "[harmless ransom note] should return `false`",
  fn: () => {
    let noteText = "this is a secret note for you from a secret admirer";
    let magazineText =
      "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that is not as hard as it seems this is my advice for you";

    assertEquals(harmlessRansomNote(noteText, magazineText), false);
  }
});

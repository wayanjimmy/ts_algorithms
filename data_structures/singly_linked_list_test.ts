import { test } from "https://deno.land/std@v0.7/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.7/testing/asserts.ts";
import { LinkedList } from "./singly_linked_list.ts";

const list = new LinkedList<string>();

test({
  name: "[singly linked list] add new node to the list and returns `red`",
  fn: () => assertEquals(list.add("red"), "red")
});

test({
  name: "[singly linked list] get node by index returns `red`",
  fn: () => assertEquals(list.get(0), "red")
});

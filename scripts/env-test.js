import test from "node:test";
import assert from "node:assert/strict";
import { findMissing } from "./env.js";

test("returns an empty list when everything is present", () => {
  assert.deepEqual(findMissing({ A: "1", B: "2" }, ["A", "B"]), []);
});

test("returns names that are missing", () => {
  assert.deepEqual(findMissing({ A: "1" }, ["A", "B"]), ["B"]);
});

test("treats an empty string as missing", () => {
  assert.deepEqual(findMissing({ A: "1", B: "" }, ["A", "B"]), ["B"]);
});
import { getRandomElement } from "..";

test("get a random array element that does not return null", () => expect(getRandomElement(["one", "two", "three"])).not.toBeNull());
test("get a random array element that does return defined", () => expect(getRandomElement(["one", "two", "three"])).toBeDefined());
test("get a random array element that is truthy", () => expect(getRandomElement(["one", "two", "three"])).toBeTruthy());
test("get a random array element that is present", () => expect(getRandomElement(["one", "two", "three"])).toContain("one"  || "two" || "three"));

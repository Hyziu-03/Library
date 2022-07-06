import { validateName } from "..";

test("validating a proper name", () => expect(validateName("Daria", "Zawiałow")).toBe(true));
test("validating function with one argument", () => expect(validateName("Daria")).toBe(false));
test("validating function with a falsy argument", () => expect(validateName("", "Zawiałow")).toBe(false));
test("validating function with argument of type array", () => expect(validateName("Daria", [])).toBe(false));
test("validating function with argument of type number", () => expect(validateName(123, "Zawiałow")).toBe(false));
test("validating function with a null argument", () => expect(validateName("Daria", null)).toBe(false));

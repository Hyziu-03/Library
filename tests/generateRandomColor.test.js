import { generateRandomColor } from "..";

test("generating random color that is not null", () => expect(generateRandomColor()).not.toBeNull());
test("generating random color that is defined", () => expect(generateRandomColor()).toBeDefined());
test("generating random color that is truthy", () => expect(generateRandomColor()).toBeTruthy());

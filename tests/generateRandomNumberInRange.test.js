import { generateRandomNumberInRange } from "..";

test("generating a random number that is not null", () => expect(generateRandomNumberInRange(10, 20)).not.toBeNull());
test("generating a random number that is defined", () => expect(generateRandomNumberInRange(10, 20)).toBeDefined());
test("generating a random number that is truthy", () => expect(generateRandomNumberInRange(10, 20)).toBeTruthy());

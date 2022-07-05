import { reverseString } from "..";

test("reversing a standard string", () => expect(reverseString("July")).toEqual("yluJ"));
test("reversing a string with space", () => expect(reverseString("Hello world!")).toEqual("!dlrow olleH"));
test("reversing a palindrome", () => expect(reverseString("kayak")).toEqual("kayak"));
test("reversing a string and checking for emptiness", () => expect(reverseString("Adele")).not.toEqual(""));

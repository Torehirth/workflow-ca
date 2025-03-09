import { describe, expect, it } from "vitest";
import { validateEmail } from "./validation.js";
import { validatePassword } from "./validation.js";
// import { validateLoginForm } from "./validation.js";

describe("validateEmail", () => {
  // Test 1: Make sure student emails work
  it("returns true for valid studen Noroff email", () => {
    const email = "student@stud.noroff.no";
    const result = validateEmail(email);
    expect(result).toBe(true);
  });
  // Test 2: Make sure staff emails work
  it("returns true for Noroff staff email", () => {
    const email = "staff@noroff.no";
    const result = validateEmail(email);
    expect(result).toBe(true);
  });
  // Test 3: Make sure other email domains are rejected
  it("returns true for Noroff staff email", () => {
    const email = "student@gmail.com";
    const result = validateEmail(email);
    expect(result).toBe(false);
  });
  // Test 4: Make sure invalid email formats are rejected
  it("returns true for Noroff staff email", () => {
    const email = "not-an-email";
    const result = validateEmail(email);
    expect(result).toBe(false);
  });
});

describe("validatePassword", () => {
  const testCases = [
    { password: "short", expected: false },
    { password: "exactly8", expected: true },
    { password: "longerpassword", expected: true },
  ];

  testCases.forEach(({ password, expected }) => {
    it(`returns ${expected} for password "${password}"`, () => {
      const result = validatePassword(password);
      expect(result).toBe(expected);
    });
  });
});

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

// The test below has several errors!

// describe("validateLoginForm", () => {
//   // We're testing three different situations:
//   const testCases = [
//     {
//       // Situation 1: Everything is correct
//       email: "valid@stud.noroff.no",
//       password: "validpass",
//       expected: { isValid: true, errors: {} },
//     },
//     {
//       // Situation 2: Everything is wrong
//       email: "invalid@gmail.com",
//       password: "short",
//       expected: {
//         isValid: false,
//         errors: {
//           email: "Please enter a valid Noroff email address",
//           password: "Password must be at least 8 characters",
//         },
//       },
//     },
//     {
//       // Situation 3: Email is good but password is too short
//       email: "valid@noroff.no",
//       password: "short",
//       expected: {
//         isValid: false,
//         errors: {
//           password: "Password must be at least 8 characters",
//         },
//       },
//     },
//   ];

//   testCases.forEach(({ email, password, expected }) => {
//     it(`validates correctly for email "${email}" and password "${password}"`, () => {
//       const result = validateLoginForm(email, password);
//       expect(result).toEqual(expected);
//     });
//   });
// });

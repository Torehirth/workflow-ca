import { expect, it, beforeEach, describe } from "vitest";
import { getUsername, saveUser } from "./storage";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Returns the name from the user object in local storage", () => {
    saveUser({ name: "test" });
    expect(getUsername()).toBe("test");
  });

  it("Returns null when no user exists in local storage", () => {
    getUsername();
    expect(getUsername()).toBe(null);
  });
});

import { it, describe, expect } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  it("Returns true when current path matches href exactly", () => {
    expect(isActivePath("/login", "/login")).toBe(true);
  });

  it("Returns true for root path (“/”) when path is “/” or “/index.html”", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("Returns true when current path includes the href", () => {
    expect(isActivePath("/venue", "/venue/index.html?id=")).toBe(true);
  });

  it("Returns false when paths don’t match", () => {
    expect(isActivePath("/", "/register")).toBe(false);
    expect(isActivePath("/login", "/venue")).toBe(false);
  });
});

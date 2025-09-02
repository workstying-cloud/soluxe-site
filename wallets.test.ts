
import { describe, it, expect } from "vitest";
import { WALLETS } from "../../lib/wallets";

describe("wallets", () => {
  it("has exactly 4 wallets", () => {
    expect(WALLETS.length).toBe(4);
  });
  it("BTC plausible", () => {
    expect(/^bc1|^1|^3/.test(WALLETS[0].address)).toBe(true);
  });
  it("ETH 0x + 40 hex", () => {
    expect(/^0x[a-fA-F0-9]{40}$/.test(WALLETS[1].address)).toBe(true);
  });
  it("SOL length >= 32", () => {
    expect(WALLETS[2].address.length).toBeGreaterThanOrEqual(32);
  });
  it("TRX starts with T", () => {
    expect(/^T/.test(WALLETS[3].address)).toBe(true);
  });
});

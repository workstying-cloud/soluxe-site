
import { describe, it, expect } from "vitest";
import { qrURL, schemeFor } from "../../lib/utils";

describe("utils", () => {
  it("qr URL encodes correctly", () => {
    const addr = "0x7D651888C22737694a6b57FF07452D9fB3986ee2";
    expect(qrURL(addr)).toContain(encodeURIComponent(addr));
  });
  it("wallet URI schemes", () => {
    expect(schemeFor("Bitcoin (BTC)")).toBe("bitcoin:");
    expect(schemeFor("Ethereum (ETH / ERC-20)")).toBe("ethereum:");
    expect(schemeFor("Solana (SOL)")).toBe("solana:");
    expect(schemeFor("TRON (TRX / USDT-TRC20)")).toBe("tron:");
  });
});

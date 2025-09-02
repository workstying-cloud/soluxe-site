
export const qrURL = (data: string) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(data)}`;

export const schemeFor = (chain: string) =>
  chain.startsWith("Bitcoin") ? "bitcoin:" :
  chain.startsWith("Ethereum") ? "ethereum:" :
  chain.startsWith("Solana") ? "solana:" :
  chain.startsWith("TRON") ? "tron:" : "";

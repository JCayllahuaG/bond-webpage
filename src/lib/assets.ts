const DEFAULT_ASSET_BASE = "https://pub-77a3acdd380842359b5b76ca4772fe64.r2.dev/assets/public";

export function assetUrl(path: string) {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const base = import.meta.env.PUBLIC_ASSET_BASE_URL ?? DEFAULT_ASSET_BASE;
  const normalizedBase = base.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBase}${normalizedPath}`;
}
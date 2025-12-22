export async function getPackageLastWeekDownloads(pkg: string) {
  const url = `https://api.npmjs.org/downloads/point/last-week/${pkg}`;
  const r = await fetch(url);
  if (r.ok) {
    const j: unknown = await r.json();
    if (
      j &&
      typeof j === "object" &&
      "downloads" in j &&
      typeof j["downloads"] === "number"
    ) {
      return j.downloads;
    }
  }
  throw new Error(`Failed to fetch npm stats for "${pkg}" package`);
}

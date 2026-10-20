const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiGet(path) {
  const res = await fetch(`${BASE_URL}${path}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  return res.json();
}
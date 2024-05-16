type Fetcher = <T>(
  url: string,
) => Promise<{ data: T; state: number; ok: boolean }>;

export const fetcher: Fetcher = async <T>(url: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}${url}`);
  const data = await res.json();
  const state = res.status;
  const ok = res.ok;
  return { data, state, ok };
};

type Fetcher = <T>(url: string) => Promise<T>;

class FetchError extends Error {
  status: number;
  info: any;

  constructor(message: string, status: number, info: any) {
    super(message);
    this.status = status;
    this.info = info;
  }
}

export const fetcher: Fetcher = async (url) => {
  const fetch_url = url.startsWith("/")
    ? `${process.env.BACKEND_URL}${url}`
    : url;

  const res = await fetch(fetch_url);

  if (!res.ok) {
    const info = await res.json();
    throw new FetchError(
      "An error occurred while fetching the data.",
      res.status,
      info,
    );
  }

  return res.json();
};

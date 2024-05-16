export const fetcher = async <T>(url: string): Promise<T> => {
  return fetch(`${process.env.BACKEND_URL}${url}`).then((res) => {
    return res.json();
  });
};

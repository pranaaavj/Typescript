interface ApiResponse {
  data: {
    products: object[];
    total: number;
  };
  error: string | null;
}

async function fetchData<T>(url: string): Promise<ApiResponse> {
  const data = await fetch(url);
  const raw = await data.json();
  return {
    data: raw,
    error: null,
  };
}

fetchData('https://dummyjson.com/products').then((res) =>
  console.log(res.data.products[0])
);

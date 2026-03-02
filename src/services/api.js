export const BASE_URL = "https://dummyjson.com/products/";

export async function fetchVehicles() {
  const res = await fetch(`${BASE_URL}/category/vehicle`);
  return res.json();
}

export async function fetchVehicleById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
}

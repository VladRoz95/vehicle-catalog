export const BASE_URL = "https://dummyjson.com/products";

let vehiclesCache = null;
const vehicleCacheById = {};

export async function fetchVehicles() {
  if (vehiclesCache) {
    return vehiclesCache;
  }

  const res = await fetch(`${BASE_URL}/category/vehicle`);
  const data = await res.json();

  vehiclesCache = data;

  return data;
}

export async function fetchVehicleById(id) {
  if (vehicleCacheById[id]) {
    return vehicleCacheById[id];
  }

  const res = await fetch(`${BASE_URL}/${id}`);
  const data = await res.json();

  vehicleCacheById[id] = data;

  return data;
}
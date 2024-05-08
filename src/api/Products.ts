import { FilterDropdown, Product } from "./types";

const baseUrl = "http://localhost:3001";

export const getProduct = async (): Promise<Product[]> => {
  const res = await fetch(`${baseUrl}/products`, { cache: "no-store" });

  const data = res.json();

  return data;
};

export const getCategory = async (): Promise<FilterDropdown[]> => {
  const res = await fetch(`${baseUrl}/categories`, {
    cache: "no-store",
  });

  const data = res.json();
  return data;
};

export const getBrand = async (): Promise<FilterDropdown[]> => {
  const res = await fetch(`${baseUrl}/brands`, {
    cache: "no-store",
  });

  const data = res.json();
  return data;
};

export const getWishlist = async (): Promise<Product[]> => {
  const res = await fetch(`${baseUrl}/wishlist`, {
    cache: "no-store",
  });

  const data = res.json();
  return data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const res = await fetch(`${baseUrl}/products/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data;
};

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { FilterDropdown, Product } from "../api/types";
import { AxiosError } from "axios";

import { getBrand, getCategory, getProduct } from "../api/Products";

export const useGetProduct = (): UseQueryResult<Product[], AxiosError> => {
  return useQuery({
    queryKey: ["getProduct"],
    queryFn: getProduct,
  });
};

export const useGetCategory = (): UseQueryResult<
  FilterDropdown[],
  AxiosError
> => {
  return useQuery({
    queryKey: ["getCategory"],
    queryFn: getCategory,
  });
};

export const useGetBrandName = (): UseQueryResult<
  FilterDropdown[],
  AxiosError
> => {
  return useQuery({
    queryKey: ["getBrandname"],
    queryFn: getBrand,
  });
};

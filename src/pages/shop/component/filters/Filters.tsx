import { Link } from "react-router-dom";

import {
  FormCheckbox,
  FormDatePicker,
  FormInput,
  FormRange,
  FormSelect,
} from "../../../../components/form";
import { useEffect, useState } from "react";
import { getBrand, getCategory } from "../../../../api/Products";
import { FilterDropdown } from "../../../../api/types";

export const Filters = () => {
  const [categories, setCategories] = useState<FilterDropdown[] | null>([]);
  const [brandName, setBrandName] = useState<FilterDropdown[] | null>([]);

  useEffect(() => {
    const category = async () => {
      try {
        const list = await getCategory();
        const listArray = list.map((item) => item.name);
        setCategories(listArray);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const brand = async () => {
      try {
        const list = await getBrand();
        const listBrand = list.map((item) => item.name);
        setBrandName(listBrand);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    brand();
    category();
  }, []);

  return (
    <form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue=""
      />
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        list={categories as unknown as string[]}
        size="select-sm"
        defaultValue="all"
      />
      {/* COMPANIES */}
      <FormSelect
        label="select brand"
        name="brand"
        list={brandName as unknown as string[]}
        size="select-sm"
        defaultValue="all"
      />
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={["asc", "desc", "price high", "price low"]}
        size="select-sm"
        defaultValue="a-z"
      />
      {/* Producer */}
      <FormSelect
        label="Select gender"
        name="gender"
        list={["all", "male", "female"]}
        size="select-sm"
        defaultValue="all"
      />
      {/* PRICE */}
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={2000}
      />
      {/* Date Picker */}
      <FormDatePicker label="select minimum production date" name="date" />

      {/* In stock */}
      <FormCheckbox
        label="Only products in stock"
        name="stock"
        defaultValue="false"
        size={"checkbox-sm"}
      />

      {/* BUTTONS */}

      <button
        type="submit"
        className="btn bg-blue-600 hover:bg-blue-500 text-white btn-sm"
      >
        search
      </button>
      <Link to="/shop?page=1" className="btn btn-primary btn-sm">
        reset
      </Link>
    </form>
  );
};

export default Filters;

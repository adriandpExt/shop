import { Link } from "react-router-dom";

import {
  FormCheckbox,
  FormDatePicker,
  FormInput,
  FormRange,
  FormSelect,
} from "../../../../components/form";

import { FilterDropdown } from "../../../../api/types";
import { useGetBrandName, useGetCategory } from "../../../../query/Product";
import { gender, sortBy } from "./utils";

export const Filters = () => {
  const categories = useGetCategory();
  const brandName = useGetBrandName();

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
        list={categories.data as unknown as FilterDropdown[]}
        size="select-sm"
        defaultValue="all"
      />
      {/* COMPANIES */}
      <FormSelect
        label="select brand"
        name="brand"
        list={brandName.data as unknown as FilterDropdown[]}
        size="select-sm"
        defaultValue="all"
      />
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={sortBy}
        size="select-sm"
        defaultValue="a-z"
      />
      {/* Producer */}
      <FormSelect
        label="Select gender"
        name="gender"
        list={gender}
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

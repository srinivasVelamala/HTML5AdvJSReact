import React from "react";
import categories from "../../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}
export const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <>
      <i className="fa fa-bold" aria-hidden="true">
        Select Category:
      </i>
      <select
        onChange={(event) => onSelectCategory(event.target.value)}
        className="form-select"
      >
        <option value="">All Categories</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

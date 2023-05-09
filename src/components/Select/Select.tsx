import React from "react";

type SelectProps = {
  name: string;
  value: number;
  onChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<SelectProps> = ({ name, value, onChangeHandler }) => {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <select
      value={value}
      className="rounded border p-1.5"
      onChange={onChangeHandler}
      name={name}
    >
      {values.map((value, index) => {
        return (
          <option key={index} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
};

export default Select;

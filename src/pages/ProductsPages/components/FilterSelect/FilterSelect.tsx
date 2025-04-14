import { useState } from 'react';
import style from './FilterSelect.module.scss';
import Select, { MultiValue, StylesConfig } from 'react-select';

type Category = {
  value: string;
  label: string;
};

const options: Category[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

const colourStyles: StylesConfig<Category> = {
  control: (styles) => ({ ...styles, border: 'none' }),
  placeholder: (styles) => ({ ...styles, color: 'rgba(175, 173, 181, 1)' }),
};

const FilterSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<Category>>(
    [],
  );

  const handleChange = (selected: MultiValue<Category>) => {
    setSelectedOptions(selected);
  };

  return (
    <Select
      isMulti
      name="categories"
      closeMenuOnSelect={false}
      options={options}
      className={style.basicMultiSelect}
      styles={colourStyles}
      placeholder="Filter"
      onChange={handleChange}
    />
  );
};
export default FilterSelect;

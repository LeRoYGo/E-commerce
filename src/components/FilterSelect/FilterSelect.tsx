import { useEffect, useState } from 'react';
import style from './FilterSelect.module.scss';
import Select, { MultiValue } from 'react-select';

type Category = {
  value: string;
  label: string;
};

const options: Category[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

const FilterSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<Category>>(
    [],
  );

  const handleChange = (selected: MultiValue<Category>) => {
    // console.log('Выбранные значения:', selected);
    setSelectedOptions(selected);
  };
  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);

  return (
    <Select
      isMulti
      name="categories"
      closeMenuOnSelect={false}
      options={options}
      className={style.basicMultiSelect}
      classNamePrefix="select"
      placeholder="Filter"
      onChange={handleChange}
    />
  );
};
export default FilterSelect;

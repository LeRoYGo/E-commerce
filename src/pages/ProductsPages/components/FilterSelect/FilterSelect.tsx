import style from './FilterSelect.module.scss';
import { useEffect, useState } from 'react';
import Select, { MultiValue } from 'react-select';
import { FilterTypes } from '../../../../types';
import { useGetCategoriesQuery } from '../../../../store/api';

const FilterSelect = () => {
  const [selectedOptions, setSelectedOptions] =
    useState<MultiValue<FilterTypes>>();
  const { data } = useGetCategoriesQuery('Categories');

  const handleChange = (selected: MultiValue<FilterTypes>) => {
    setSelectedOptions(selected);
  };

  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);

  if (typeof data !== 'undefined') {
    const filterArr = (): FilterTypes[] => {
      return data.map((obj) => {
        return {
          label: obj.name,
          value: obj.slug,
        };
      });
    };

    return (
      <Select
        isMulti
        name="categories"
        options={filterArr()}
        closeMenuOnSelect={false}
        className={style.basicMultiSelect}
        placeholder="Filter"
        onChange={handleChange}
      />
    );
  }
};
export default FilterSelect;

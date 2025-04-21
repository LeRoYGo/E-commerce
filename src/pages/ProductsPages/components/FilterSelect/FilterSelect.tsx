import { useState } from 'react';
import Select from 'react-select';
import style from './FilterSelect.module.scss';
import { useGetCategoriesQuery } from '../../../../store/api';
import { FilterTypes } from '../../../../types';

const FilterSelect = () => {
  const [selectedOption, setSelectedOption] = useState<FilterTypes | null>(
    null,
  );
  const { data, isLoading, error } = useGetCategoriesQuery('Categories');

  const handleChange = (selected: FilterTypes | null) => {
    setSelectedOption(selected);
    console.log('Выбрано:', selected);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>There was an error when loading categories.</p>;
  if (!data) return null;

  const filterOptions: FilterTypes[] = data.map((obj) => ({
    label: obj.name,
    value: obj.slug,
  }));

  return (
    <Select
      options={filterOptions}
      value={selectedOption}
      onChange={handleChange}
      className={style.basicSelect}
      placeholder="Filter"
      isClearable
    />
  );
};

export default FilterSelect;

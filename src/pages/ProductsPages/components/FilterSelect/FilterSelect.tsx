import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useGetCategoriesQuery } from '../../../../store/api.ts';
import style from './FilterSelect.module.scss';
import { useQueryParams } from '../../../../hook/useQueryParams.ts';
import { FilterTypes } from '../../../../types/index.ts';

const FilterSelect = () => {
  const { params, updateParams } = useQueryParams();
  const { data, isLoading, error } = useGetCategoriesQuery(null);
  const [selectedOption, setSelectedOption] = useState<FilterTypes | null>(
    null,
  );

  // Обновляем selectedOption если меняется параметр в URL
  useEffect(() => {
    if (!data) return;

    const categorySlug = params.category;

    if (categorySlug) {
      const matchedOption = data.find((cat) => cat.slug === categorySlug);
      if (matchedOption) {
        setSelectedOption({
          label: matchedOption.name,
          value: matchedOption.slug,
        });
      }
    } else {
      setSelectedOption(null);
    }
  }, [params.category, data]);

  const handleChange = (selected: FilterTypes | null) => {
    setSelectedOption(selected);
    updateParams({ category: selected?.value.toString() || null });
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

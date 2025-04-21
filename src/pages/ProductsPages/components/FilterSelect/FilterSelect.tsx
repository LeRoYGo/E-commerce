import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useGetCategoriesQuery } from '../../../../store/api.ts';
import style from './FilterSelect.module.scss';
import { useNavigate, useSearchParams } from 'react-router';
import { FilterTypes } from '../../../../types/index.ts';

const FilterSelect = () => {
  const [selectedOption, setSelectedOption] = useState<FilterTypes | null>(
    null,
  );
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetCategoriesQuery(null);

  // Функция для навигации по выбранной категории
  const handleSelect = (slug: string | null) => {
    navigate(slug ? `/products?category=${slug}` : '/products');
  };

  // Обработка изменения выбранного фильтра
  const handleChange = (selected: FilterTypes | null) => {
    setSelectedOption(selected);
  };

  // Обновление выбранной категории при изменении selectedOption
  useEffect(() => {
    if (selectedOption?.value) {
      handleSelect(selectedOption.value.toString());
    } else {
      handleSelect(null);
    }
  }, [selectedOption]);

  // Обновление selectedOption при изменении данных категорий или параметров поиска
  useEffect(() => {
    if (!data) return;

    const categorySlug = searchParams.get('category');
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
  }, [data, searchParams]);

  // Обработки состояний загрузки и ошибок
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

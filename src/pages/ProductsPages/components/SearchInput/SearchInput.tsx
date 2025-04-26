import { useEffect, useState } from 'react';
import style from './SearchInput.module.scss';
import { useQueryParams } from '../../../../hook/useQueryParams.ts';
import Button from '../../../../components/Button/Button.tsx';

const SearchInput = () => {
  const { params, updateParams } = useQueryParams();
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const handleClick = () => updateParams({ title: inputValue });

  useEffect(() => {
    setInputValue(params.title || '');
  }, [params.title]);

  return (
    <article className={style.inputBox}>
      <input
        className={style.input}
        type="search"
        value={inputValue}
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder="Search product..."
      />
      <Button onClick={handleClick} style={{ whiteSpace: 'nowrap' }}>
        Find now
      </Button>
    </article>
  );
};

export default SearchInput;

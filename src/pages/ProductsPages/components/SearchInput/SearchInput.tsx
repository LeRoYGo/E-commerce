import style from './SearchInput.module.scss';
import Button from '../../../../components/Button';
import { useState } from 'react';

const SearchInput = () => {
  const [searchTerms, setSearchTerms] = useState('');

  return (
    <div className={style.inputBox}>
      <input
        className={style.input}
        id="search"
        type="search"
        placeholder="Search product"
        value={searchTerms}
        onChange={(e) => {
          setSearchTerms(e.target.value);
        }}
      />
      <Button style={{ whiteSpace: 'nowrap' }}>Find now</Button>
    </div>
  );
};
export default SearchInput;

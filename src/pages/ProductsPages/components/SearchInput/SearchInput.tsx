import style from './SearchInput.module.scss';
import Button from '../../../../components/Button';

const SearchInput = () => {
  return (
    <div className={style.inputBox}>
      <input
        className={style.input}
        id="search"
        type="search"
        placeholder="Search product"
      />
      <Button text="Find now" style={{ whiteSpace: 'nowrap' }} />
    </div>
  );
};
export default SearchInput;

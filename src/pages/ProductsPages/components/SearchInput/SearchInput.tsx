import style from './SearchInput.module.scss';
import Button from '../../../../components/Button';

const SearchInput = () => {
  return (
    <div className={style.inputBox}>
      <input
        className={style.input}
        id="search"
        placeholder="Search product"
        type="text"
      />
      <Button text="Find now" style={{ whiteSpace: 'nowrap' }} />
    </div>
  );
};
export default SearchInput;

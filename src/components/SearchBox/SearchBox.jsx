import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchText = useSelector(selectNameFilter);

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(changeFilter(value.trim().toLowerCase()));
  };

  return (
    <div className={css.searchContainer}>
     <label className={css.labelSearch}>
      <span className={css.labelTextSearch}>Find contacts by name</span>
      <input className={css.inputSearch} 
      type="text" 
      name="text" 
      value={searchText}
      onChange={handleChange}/>
      </label>
    </div>
  )
}

export default SearchBox
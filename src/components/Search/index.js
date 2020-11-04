import React from 'react';
import css from './index.module.scss';

const Search = ({ setQueryTextHandler }) => (
    <input className={css.search} 
    type='search' 
    placeholder='Search...'
    onFocus={(e) => e.target.placeholder = ''} 
    onBlur={(e) => e.target.placeholder = 'Search...'}
    onChange={(e) => setQueryTextHandler(e.target.value)} />
)

export default Search;
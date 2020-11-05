import React from 'react';
import Search from '../Search';
import SortBy from '../Sort/SortBy';
import SortOrder from '../Sort/SortOrder';
import css from './index.module.scss';

const ListControls = ({ isDisabled, setQueryTextHandler, orderBy, setOrderByHandler, orderDirection, setOrderDirectionHandler }) => (
    <div className={css.listControls} data-isdisabled={isDisabled}>
        <Search setQueryTextHandler={setQueryTextHandler} />
        <SortBy orderBy={orderBy} setOrderByHandler={setOrderByHandler} />
        <SortOrder orderDirection={orderDirection} setOrderDirectionHandler={setOrderDirectionHandler} />
    </div>
)

export default ListControls;
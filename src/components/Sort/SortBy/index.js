import React from 'react';
import css from './index.module.scss';

const SortBy = ({ orderBy, setOrderByHandler }) => (
    <div className={css.sortButtons}>
        Sort By:
        <button className={orderBy === 'name' && css.active} onClick={(e) => setOrderByHandler('name')}>
            Name
        </button>
        <button className={orderBy === 'department' && css.active} onClick={(e) => setOrderByHandler('department')}>
            Department
        </button>
        <button className={orderBy === 'accountLocked' && css.active} onClick={(e) => setOrderByHandler('accountLocked')}>
            Locked
        </button>
    </div>
)

export default SortBy;
import React from 'react';
import { FaCaretSquareUp, FaCaretSquareDown } from 'react-icons/fa';
import css from './index.module.scss';

const SortOrder = ({ orderDirection, setOrderDirectionHandler }) => (
    <button 
        className={css.sortOrder} 
        onClick={(e) => setOrderDirectionHandler(orderDirection === 'Ascending' ? 'Descending' : 'Ascending')}
        title={orderDirection}
        aria-label='Reverse Sort Order'>
            Sort Order:
            {
                orderDirection === 'Ascending' ? <FaCaretSquareUp /> : <FaCaretSquareDown />
            }
    </button>
)

export default SortOrder;
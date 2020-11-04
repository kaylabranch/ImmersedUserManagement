import React from 'react';
import { FaCaretSquareUp, FaCaretSquareDown } from 'react-icons/fa';
import css from './index.module.scss';

const SortOrder = ({ orderDirection, setOrderDirectionHandler }) => (
    <div className={css.sortOrder}>
        Sort Order:
        <button 
            onClick={(e) => setOrderDirectionHandler(orderDirection === 'Ascending' ? 'Descending' : 'Ascending')} 
            title={orderDirection}
            aria-label='Reverse Sort Order'>
                {
                    orderDirection === 'Ascending' ? <FaCaretSquareUp /> : <FaCaretSquareDown />
                }
        </button>
    </div>
)

export default SortOrder;
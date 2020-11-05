import React from 'react';
import { FaTrashAlt, FaPencilAlt, FaUnlock, FaLock } from 'react-icons/fa';
import css from './index.module.scss';

const TeamMember = ( { details, onDeleteUserHandler }) => {
    if (details === null) {
        return null;
    }

    return (
        <li className={css.listItem}>
            <img className={css.avatar} src={details.avatar != null ? details.avatar : 'https://icon2.cleanpng.com/20180319/fvw/kisspng-computer-icons-user-profile-clip-art-person-icon-user-person-man-icon-5ab04a2bc71e38.6372538715215027638156.jpg'} alt={`Avatar image of ${details.name || 'user'}`} />
            <div>
                {
                    details.name &&
                    <p className={css.name}>{details.name}</p>
                }
                {
                    (details.title || details.department) &&
                    <small className={css.titleContainer}>
                        {
                            details.title &&
                            <span className={css.title}>{details.title}</span>
                        }
                        {
                            details.department &&
                            <span className={css.department}>{details.department}</span>
                        }
                    </small>
                }
                {
                    details.email &&
                    <a className={css.email} href={`mailto:${details.email}`}>{details.email}</a>
                }
            </div>
            <ul className={css.actionsList} data-accountlocked={details.accountLocked}>
                <li className={css.actionItem}>
                    <button className={css.edit} title='Edit' aria-label='Edit'>
                        <FaPencilAlt />
                    </button>
                </li>
                <li className={css.actionItem}>
                    <button className={css.lock} title={details.accountLocked ? 'Unlock' : 'Lock'} aria-label={details.accountLocked ? 'Unlock' : 'Lock'}>
                        {
                            details.accountLocked ? <FaUnlock /> : <FaLock />
                        }
                    </button>
                </li>
                <li className={css.actionItem}>
                    <button 
                        className={css.unlock} 
                        title='Delete' 
                        aria-label='Delete'
                        onClick={() => onDeleteUserHandler(details.email)}>
                            <FaTrashAlt />
                    </button>
                </li>
            </ul>
        </li>
    );
}

export default TeamMember;
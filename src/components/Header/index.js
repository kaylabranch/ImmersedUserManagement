import React from 'react';
import css from './index.module.scss';

const Header = ({ companyLogo, companyName }) => (
    <header className={css.header}>
        {
            companyLogo &&
            <img className={css.companyLogo} src={companyLogo} alt={`${companyName} Logo`} />
        }
        <div>
            {
                companyName &&
                <h1 className={css.companyName}>{companyName}</h1>
            }
            <h2 className={css.subHeading}>User Management Portal</h2>
        </div>
    </header>
)

export default Header;
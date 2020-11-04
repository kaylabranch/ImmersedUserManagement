import React, { useState } from 'react';
import ListControls from '../ListControls';
import TeamMember from '../TeamMember';
import css from './index.module.scss';

const TeamList = ({ teamList }) => {
    const [orderBy, setOrderBy] = useState('name');
    const [orderDirection, setOrderDirection] = useState('Ascending');
    const [queryText, setQueryText] = useState('');

    let order = -1;
    if (orderDirection === 'Ascending') {
        order = 1;
    }

    let filteredList = teamList
    .sort((a, b) => {
        if (a[orderBy].toString().toLowerCase() < b[orderBy].toString().toLowerCase()) { 
            return -1 * order
        }
        else {
            return 1 * order
        }
    })
    .filter(listItem => {
        return (
            listItem.name.toLowerCase().includes(queryText.toLowerCase()) || 
            listItem.email.toLowerCase().includes(queryText.toLowerCase()) || 
            listItem.title.toLowerCase().includes(queryText.toLowerCase()) || 
            listItem.department.toLowerCase().includes(queryText.toLowerCase())
        )
    })

    return (
        <section className={css.listContainer}>
            <ListControls
                setQueryTextHandler={setQueryText}
                orderBy={orderBy}
                setOrderByHandler={setOrderBy}
                orderDirection={orderDirection}
                setOrderDirectionHandler={setOrderDirection} />            
            {
                (filteredList && filteredList.length > 0) &&
                <ul className={css.list}>
                    {
                        filteredList.map((teamMember, index) => 
                            <TeamMember key={`teamMember-${index}`} details={teamMember} />
                        )
                    }
                </ul>
            }
        </section>
    );
}

export default TeamList;
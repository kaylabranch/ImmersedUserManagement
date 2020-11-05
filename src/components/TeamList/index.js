import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addUser, deleteUser } from './actions';
import { loadTeamList } from './thunks';
import ListControls from '../ListControls';
import TeamMember from '../TeamMember';
import AddUserForm from '../AddUserForm';
import css from './index.module.scss';

const TeamList = ({ teamList = [], onAddUser, onDeleteUser, isLoading, beginLoadingTeamList }) => {
    useEffect(() => {
        beginLoadingTeamList();
    }, []);

    const [orderBy, setOrderBy] = useState('name');
    const [orderDirection, setOrderDirection] = useState('Ascending');
    const [queryText, setQueryText] = useState('');

    let order = -1;
    if (orderDirection === 'Ascending') {
        order = 1;
    }

    let filteredList = teamList?.users?.sort((a, b) => {
        if (a[orderBy]?.toString().toLowerCase() < b[orderBy]?.toString().toLowerCase()) { 
            return -1 * order
        }
        else {
            return 1 * order
        }
    })?.filter(listItem => {
        return (
            listItem.name.toLowerCase().includes(queryText.toLowerCase()) || 
            listItem.email.toLowerCase().includes(queryText.toLowerCase()) || 
            listItem.title.toLowerCase().includes(queryText.toLowerCase()) || 
            listItem.department.toLowerCase().includes(queryText.toLowerCase())
        )
    })

    return isLoading ? <h1>Team list is loading...</h1> : 
        <section className={css.listContainer}>
            <ListControls
                isDisabled={filteredList === null || filteredList?.length <= 1}
                setQueryTextHandler={setQueryText}
                orderBy={orderBy}
                setOrderByHandler={setOrderBy}
                orderDirection={orderDirection}
                setOrderDirectionHandler={setOrderDirection} />            
            {
                (filteredList && filteredList?.length > 0) &&
                <ul className={css.list}>
                    {
                        filteredList.map((teamMember, index) => 
                            <TeamMember 
                                key={`teamMember-${index}`} 
                                details={teamMember}
                                onDeleteUserHandler={onDeleteUser} />
                        )
                    }
                </ul>
            }
            <AddUserForm teamList={teamList} onAddUserHandler={onAddUser} />
        </section>;
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
	teamList: state.teamList
});

const mapDispatchToProps = dispatch => ({
    beginLoadingTeamList: () => dispatch(loadTeamList()),
	onAddUser: user => dispatch(addUser(user)),
	onDeleteUser: email => dispatch(deleteUser(email))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
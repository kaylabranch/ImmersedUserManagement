// Side effects like API calls will happen here

import { loadTeamListProgress, loadTeamListSuccess, loadTeamListFailure } from './actions';

export const loadTeamList = () => async (dispatch, getState) => {
    try {
        dispatch(loadTeamListProgress());
        const response = await fetch('/data/saturn_sales.json');
        const teamList = await response.json();
        dispatch(loadTeamListSuccess(teamList));
    }
    catch (error) {
        alert('Error loading json');
        dispatch(loadTeamListFailure(error));
    }
}

// Mimic above code for other server CRUD calls, for example 'add user':

export const addUserServer = () => async (dispatch, getState) => {
    try {
        // dispatch(addUserProgress());
        // const response = await fetch('/api/addUser/teamId/userEmail', {method: 'POST'});
        // const updatedTeamList = await response.json();
        // dispatch(addUserSuccess(updatedTeamList));
    }
    catch (error) {
        // alert('Error adding user');
        // dispatch(addUserFailure(error));
    }
}
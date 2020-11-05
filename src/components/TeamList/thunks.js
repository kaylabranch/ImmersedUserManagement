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
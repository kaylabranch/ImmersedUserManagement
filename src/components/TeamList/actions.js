// Action Types
export const LOAD_TEAM_IN_PROGRESS = 'LOAD_TEAM_IN_PROGRESS';
export const LOAD_TEAM_SUCCESS = 'LOAD_TEAM_SUCCESS';
export const LOAD_TEAM_FAILURE = 'LOAD_TEAM_FAILURE';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const EDIT_USER = 'EDIT_USER';
export const LOCK_USER = 'LOCK_USER';
export const UNLOCK_USER = 'UNLOCK_USER';

// Note: Will be using 'email' as unique user identifier.

// Action Creators
export const loadTeamListProgress = () => ({
	type: LOAD_TEAM_IN_PROGRESS
});

export const loadTeamListSuccess = (teamList) => ({
	type: LOAD_TEAM_SUCCESS,
	payload: { teamList },
});

export const loadTeamListFailure = () => ({
	type: LOAD_TEAM_FAILURE
});

export const addUser = (user) => ({
	type: ADD_USER,
	payload: { user },
});

export const deleteUser = (email) => ({
	type: DELETE_USER,
	payload: { email },
});

export const editUser = (user) => ({
	type: EDIT_USER,
	payload: { user },
});

export const lockUser = (email) => ({
	type: LOCK_USER,
	payload: { email },
});

export const unlockUser = (email) => ({
	type: UNLOCK_USER,
	payload: { email },
});
import {
    LOAD_TEAM_IN_PROGRESS,
    LOAD_TEAM_SUCCESS,
    LOAD_TEAM_FAILURE,
    ADD_USER,
    DELETE_USER,
    EDIT_USER,
    LOCK_USER,
    UNLOCK_USER
} from './actions';

export const isLoading = (state = false, action) => {
    const { type } = action;

    switch (type) {
        case LOAD_TEAM_IN_PROGRESS: 
            return true;
        case LOAD_TEAM_SUCCESS:
        case LOAD_TEAM_FAILURE:
            return false;
        default:
            return state;
    }
}

export const teamList = (state = [], action) => {
	const { type, payload } = action;

	switch (type) {
        case ADD_USER: {
            const { user } = payload;
            const newUser = {
                ...user,
                accountLocked: false
            };
            const updatedUsers = state.users.concat(user);
            return {...state, users: updatedUsers}
        }
        case DELETE_USER: {
            const { email } = payload;
            const updatedUsers = state.users.filter(user => user.email !== email);
            return {...state, users: updatedUsers};
        }
        case EDIT_USER: {
            const { user } = payload;
            // Get existing user
            // Update
        }
        case LOCK_USER: {
            const { email } = payload;
            // Get existing user
            // Update
        }
        case UNLOCK_USER: {
            const { email } = payload;
            // Get existing user
            // Update
        }
        case LOAD_TEAM_SUCCESS: {
            const { teamList } = payload;
            return teamList;
        }
        case LOAD_TEAM_IN_PROGRESS:
        case LOAD_TEAM_FAILURE:
        default:
            return state;
    }
}
import { 
    ADD_USER,
    DELETE_USER,
    EDIT_USER,
    LOCK_USER,
    UNLOCK_USER
 } from './actions';

export const teamList = (state = [], action) => {
	const { type, payload } = action;

	switch (type) {
        case ADD_USER: {
            const { user } = payload;
            const newUser = {
                ...user,
                accountLocked: false
            };
            console.log(newUser);
            return state.concat(user); // concat does not mutate
        }
        case DELETE_USER: {
            const { email } = payload;
            return state.filter(user => user.email !== email);
        }
        case EDIT_USER: {
            const { user } = payload;
            // Get existing user
            // Update
            //return state.filter(user => user.email !== email);
        }
        case LOCK_USER: {
            const { email } = payload;
            // Get existing user
            // Update
            //return state.filter(user => user.email !== email);
        }
        case UNLOCK_USER: {
            const { email } = payload;
            // Get existing user
            // Update
            //return state.filter(user => user.email !== email);
        }
        default:
            return state;
    }
}
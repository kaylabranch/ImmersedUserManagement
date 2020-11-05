import React from 'react';
import User from '../../models/user';
import css from './index.module.scss';

const AddUserForm = ({ teamList, onAddUserHandler }) => (
    <form 
        className={css.container} 
        id='addUserForm'
        onSubmit={(e) => {
            e.preventDefault();
            let isDuplicateUser = teamList.users.some(user => user.email == e.target.email.value);

            if (!isDuplicateUser) {
                let newUser = new User(
                    `https://avatars.dicebear.com/api/human/${e.target.name.value}.svg`, 
                    e.target.name.value, 
                    e.target.email.value, 
                    e.target.title.value, 
                    e.target.department.value);
                onAddUserHandler(newUser);
                
                // Reset form field values
                e.target.reset();
            }
            else {
                alert('Email already exists! Try another.');
            }
        }}>
            <p className={css.heading}>Add a Team Member</p>

            <label htmlFor='name' className={css.label}>Name:</label>
            <input type='text' id='name' className={css.input} required={true} />

            <label htmlFor='email' className={css.label}>Email:</label>
            <input type='email' id='email' className={css.input} required={true} />

            <label htmlFor='title' className={css.label}>Title:</label>
            <input type='text' id='title' className={css.input} required={true} />

            <label htmlFor='department' className={css.label}>Department:</label>
            <input type='text' id='department' className={css.input} required={true} />

            <div className={css.submitContainer}>
                <input type='submit' value='Add Team Member' className={css.submit} />
            </div>
    </form>
)

export default AddUserForm;
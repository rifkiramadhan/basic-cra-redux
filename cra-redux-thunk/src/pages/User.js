import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/actions/userAction';

export default () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div>
            <h1>User Page</h1>
            <ul>
                {users.map((user) => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul>
        </div>
    );
};
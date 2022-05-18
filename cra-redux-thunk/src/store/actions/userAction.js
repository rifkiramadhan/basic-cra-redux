export const fetchUsers = () => {
    return (dispatch, getState) => {
        fetch('https://jsonplaceholder.typicode.com/users').then(resp => 
            resp.json()
        ).then(data => {
            dispatch({
                type: 'SET_USERS',
                users: data
            });
        });
    };
};
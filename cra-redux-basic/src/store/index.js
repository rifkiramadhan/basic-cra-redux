import { createStore } from 'redux';

const initialState = {
    counter: 0
};

function reducer(state = initialState, action) {
    console.log(action, '<<<< Ini Action');
    
    // Cara 1: Pakai if else
    // if(action.type === 'TAMBAH_COUNTER') {
    //     return {...state, counter: state.counter + 1};
    // } else if(action.type === 'KURANGI_COUNTER') {
    //     return {...state, counter: state.counter -1};
    // } else {
    //     return state;
    // };

    // Cara 2: Pakai switch case
    switch (action.type) {
        case 'TAMBAH_COUNTER':
            return {...state, counter: state.counter + 1};
        case 'KURANGI_COUNTER':
            return {...state, counter: state.counter -1};
        default:
            return state;
    }

};

const store = createStore(reducer);

export default store;
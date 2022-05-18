const { createStore } = require('redux');

// Reducer
// Pure Function
/*  1. Tidak boleh menerima var dari luar
    2. Harus mereturn
    3. Harus Immutable
 */
function reducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            // Logic
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'ADD_STEP':
            return state + action.step;
        default:
            return state;
    };
};

// Store
const store = createStore(reducer);

// Dispatch
// store.dispatch({
//     type: 'INCREMENT',
// });

// store.dispatch({
//     type: 'INCREMENT',
// });

// store.dispatch({
//     type: 'DECREMENT',
// });

// store.dispatch({
//     type: 'DECREMENT',
// });

store.dispatch({
    type: 'ADD_STEP',
    step: 1000,
});

// getState
const state = store.getState();
console.log("Ini state: ", state);

// Lanjutan: https://www.youtube.com/watch?v=mXPrFbpwhNg&list=PL79s6-Vs1MIiF6zNEi6fV3Jtkz7eHS2E-&index=4
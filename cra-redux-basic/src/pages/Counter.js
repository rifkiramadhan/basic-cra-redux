import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleTambah = () => {
        dispatch({
            type: 'TAMBAH_COUNTER'
        });
    };

    const handleKurang = () => {
        dispatch({
            type: 'KURANGI_COUNTER'
        });
    };

    return (
        <div>
            <h1>Counter Page</h1>
            <p>Counter: {counter}</p>
            <button onClick={handleTambah}>Tambah</button>
            <button onClick={handleKurang}>Kurang</button>
        </div>
    );
};

export default Counter;
import { createSlice } from '@reduxjs/toolkit'

const initial_state = {
    items: [],
    error: null,
    loading: false,
};

const inicio_slice = createSlice({
    name: 'inicio',
    initialState: initial_state,
    reducers: {
        fetch_started: (state) => {
            state.loading = true;
        },
        fetch_success: (state, action) => {
            state.loading = false;
            state.items = action.payload;
            state.error = null;
        },
        fetch_error: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export default inicio_slice;
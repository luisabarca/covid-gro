import { createSlice } from '@reduxjs/toolkit'

const initial_state = {
    items: [],
    error: null,
    loading: false,
    reloading: false,
};

const prevencion_slice = createSlice({
    name: 'inicio',
    initialState: initial_state,
    reducers: {
        reload_started: (state) => {
            state.loading = false;
            state.reloading = true;
        },
        fetch_started: (state) => {
            state.loading = true;
        },
        fetch_success: (state, action) => {
            state.loading = false;
            state.reloading = false;
            state.items = action.payload;
            state.error = null;
        },
        fetch_error: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.reloading = false;
        }
    }
});

export default prevencion_slice;
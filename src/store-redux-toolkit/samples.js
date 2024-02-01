import { createSlice } from '@reduxjs/toolkit';

let id = 0;

// Slices
const sampleSlice = createSlice({
	name: 'samples',
	initialState: [],
	reducers: {
		// action: function
		addSample: (state, action) => {
			state.push({
				id: ++id,
				sample: action.payload.sample,
				completed: false,
			});
		},
	},
});

export default sampleSlice.reducer;
export const { addSample } = sampleSlice.actions;

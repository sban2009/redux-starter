import taskReducer from './tasks';
import sampleReducer from './samples';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		tasks: taskReducer,
		samples: sampleReducer,
	},
});

export default store;

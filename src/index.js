import store from './store-redux-toolkit/configureStore';
import { addTask, removeTask, completedTask } from './store-redux-toolkit/tasks';

store.dispatch(addTask({ task: 'Task 1' }));

store.dispatch(addTask({ task: 'Task 2' }));
console.log(store.getState());

store.dispatch(completedTask({ id: 2 }));

store.dispatch(removeTask({ id: 1 }));

console.log(store.getState());
